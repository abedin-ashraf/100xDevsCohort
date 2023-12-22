const express = require("express");
const app = express();
const port = 3000;


let numReq = 0;
app.get("/reqnum", function (req, res) {
    numReq++;
    res.json({
        "numberOfRequests": numReq,
    })
})

app.all("*", function (req, res) {
    res.status(404).send("Route Not Found");
})

app.listen(3000);