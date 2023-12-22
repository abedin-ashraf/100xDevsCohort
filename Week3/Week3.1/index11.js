const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const zod = require("zod");

function validate(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    return response.success;
}

app.post("/login", function (req, res) {
    const input = req.body;
    const response = validate(input);
    if (!response) {
        res.json({
            msg: "Your input are invalid"
        })
    }
    else {
        res.json({
            msg: "Welcome, You are logged in successfully"
        })
    }
})

app.listen(3000);