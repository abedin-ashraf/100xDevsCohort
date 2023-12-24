const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get("/bmi", function (req, res) {
    const weight = req.query.weight;
    const height = req.query.height;

    const bmi = weight / (height * height);
    res.send(bmi.toString());
})

app.listen(3000);