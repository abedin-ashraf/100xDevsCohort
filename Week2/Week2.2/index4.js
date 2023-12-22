const express = require("express");
const port = process.env.PORT || 3000;
const appp = express();


appp.get("/", function (req, res) {
    res.send("Hello")
})

appp.post("/post", function (req, res) {
    res.send(req.query);
}
)

appp.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})