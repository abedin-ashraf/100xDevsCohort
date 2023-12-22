const express = require("express");
const app = express();
const port = 3000;

let numberofReq = 0;
function calculateRequests(req, res, next) {
    numberofReq++;
    console.log(numberofReq);
    next();
}

app.use(calculateRequests);
//Same as 
app.use(express.json());


app.get("/request", function (req, res) {
    res.send("Hii");
})

app.listen(port);