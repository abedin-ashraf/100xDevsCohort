
const express = require("express");

const app = express();
let numberofReq = 0;
function calculateRequests(req, res, next) {
    numberofReq++;
    console.log(numberofReq);
    next();
}

app.get("/req", calculateRequests, function (req, res) {

    // do something with kidney here
    res.json({
        msg: "Your kidney is fine!"
    })
});

app.listen(3000);