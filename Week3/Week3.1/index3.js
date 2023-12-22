const express = require("express");
const app = express();
const port = 3000;

app.get("/heath-checkup", function (req, res) {
    console.log("Hi from req1")
}, function (req, res) {
    console.log("Hi from req2")
})
//OR
app.get("health-checkup1", function (req, res, next) {
    console.log("hi from req1");
    next();
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})