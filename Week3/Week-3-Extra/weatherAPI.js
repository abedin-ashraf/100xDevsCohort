const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/weather/:city", async function (req, res) {
    try {
        const city = req.params.city;
        const apiKey = 'your api key';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        const weatherData = response.data;

        res.json(weatherData);
    }
    catch (err) {
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
})

app.listen(port);