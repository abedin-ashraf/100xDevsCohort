const express = require("express");
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require("fs");

let authData = fs.readFileSync('a.json', 'utf-8');
authData = JSON.parse(authData);

app.use(express.json());

function authentication(req, res, next) {
    const uname = req.headers.uname;
    const upass = req.headers.pass;
    console.log(uname, upass);

    for (let i = 0; i < authData.length; i++) {
        if (authData[i].username == uname && authData[i].password == upass) {
            next();
            return;
        }
    }
    res.status(404).json({
        message: "Username and Password doesn't match"
    })
}

app.post("/wlc", authentication, function (req, res) {
    res.status(200).json({
        message: "Welcome! to ResideHUB!"
    })
})




//Catch All or Wild-card Route
app.all("*", function (req, res) {
    res.status(404).json({
        message: "Invalid Route"
    })
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})