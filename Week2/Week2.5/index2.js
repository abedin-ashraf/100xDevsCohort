
const express = require("express");
const app = express();
const port = 3000;


function calculateSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

function time() {
    let date = new Date();
    return date.toDateString();
}

app.get("/", function (req, res) {
    const n = req.query.n; // localhost:3000?n=23
    const ans = calculateSum(n);
    res.send("Sum of 1 to " + n + " is " + ans);
})

app.get("/date", function (req, res) {
    res.send(time());
})

app.listen(3000, function () {
    console.log(`Server is running on port ${port}`);
});
