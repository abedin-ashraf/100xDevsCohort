const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello from my server");
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})