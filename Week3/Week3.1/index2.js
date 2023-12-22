
const express = require("express");

const app = express();

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "ashraf" || password != "pass") {
        res.status(400).json({ "msg": "Somethings up with your inputs" })
    } else {
        next(); //Next means fo to the next function
    }
}
function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ "msg": "Somethings up with your ionputs" });
    } else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {

    // do something with kidney here
    res.json({
        msg: "Your kidney is fine!"
    })
});

app.listen(3000);