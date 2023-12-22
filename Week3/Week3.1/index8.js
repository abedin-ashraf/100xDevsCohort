const express = require("express");
const fs = require("fs");
const zod = require("zod");
const schema = zod.array(zod.number())

// {
//     email: string =>email
//     password: atleast 8 char
//     country: "US"
// }

const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("US"),

})

const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    // if (!kidneys) {
    //     res.send("Invalid input");
    // }
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "Input is invalid"
        })
    } else {
        res.send({
            response
        })
    }

})

app.listen(3000);