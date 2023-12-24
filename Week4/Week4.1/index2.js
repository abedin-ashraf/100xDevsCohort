const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get("/profit", function (req, res) {
    const principal = parseInt(req.query.principal);
    const rate = parseFloat(req.query.rate);
    const time = parseInt(req.query.time);

    let profit = principal + (principal * rate * time);
    res.send(profit.toString());
})

app.listen(3000);