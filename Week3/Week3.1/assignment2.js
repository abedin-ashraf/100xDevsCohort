const express = require("express");
const app = express();

function calculateTime(req, res, next) {
    let st = Date.now();

}
let st;
app.get("/averageTime", function (req, res, next) {
    st = performance.now();
    next();
}, (req, res) => {
    let time = performance.now() - st;
    res.json({
        "time": time
    })
})

app.listen(3000);