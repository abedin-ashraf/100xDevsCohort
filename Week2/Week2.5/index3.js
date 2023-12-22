
const express = require("express");
const app = express();
const port = 3000;

let kidney = 4;

app.get("/get", function (req, res) {
    res.send("Now we have " + kidney + " kidneys");
})
app.post("/post", function (req, res) {
    kidney++;
    res.send(`Now we have ${kidney} kidney`);
})
app.put("/put", function (req, res) {
    res.send("replacement done");
})
app.delete("/delete", function (req, res) {
    kidney--;
    res.send(`Now we have ${kidney} kidney`);
})


app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})