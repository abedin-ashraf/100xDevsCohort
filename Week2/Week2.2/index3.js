const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//Middlewares
app.use(bodyParser.json());

app.get("/", function (req, res) {
    console.log(req.body);
    res.send(`<h1>Hello from GET Function</h1>`);
})


app.post("/post", function (req, res) {
    console.log(req.headers);
    console.log(req.headers["authorization"]);
    res.send("Hello from POST");
})

app.post("/post2", function (req, res) {
    console.log(req.body);

    res.send("Hello from POST 22");
})



app.post('/add', function (req, res) {
    res.send("<h1>Hello from POST Route</h1>");
})

//PUT Route - Updation
app.put('/put/:id', function (req, res) {
    res.send("Hello from PUT Route");
})
//DELETER Route
app.delete("/delete/:id", function (req, res) {
    res.send("Hello from DELETE Route!")
})



app.listen(port, function () {
    console.log(`App is running in port ${port}`);
})