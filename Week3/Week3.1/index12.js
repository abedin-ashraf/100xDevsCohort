
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello from GET")
})
app.post("/", function (req, res) {
    res.send(req.body.name);
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.send("Something went wrong");
})


app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
})