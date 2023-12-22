const express = require("express");
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

    res.json({
        mes: "Sorry something is up with our server"
    })
})
//catch-all or Wild card Route
app.all("*", function (req, res) {
    res.json({
        msg: "Wrong Route"
    })
})
app.listen(3000);