const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    // if (!kidneys) {
    //     res.send("Invalid input");
    // }
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
})

//global catach
app.use(function (err, req, res, next) {
    //Way to write down the server error in a separte file
    fs.writeFileSync("a.json", JSON.stringify(err));
    res.json({
        mes: "Sorry something is up with our server"
    })
})
app.listen(3000);