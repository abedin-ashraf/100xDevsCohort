const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPass = "123456";
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

function tokenverification(req, res, next) {
    const token = req.headers.token;
    try {
        const decoded = jwt.verify(token, jwtPass);
        res.json({
            authData
        });
    } catch (err) {
        res.status(401).json({
            message: "Token is invalid or has expired"
        });
    }
}

app.post("/signup", function (req, res) {
    const username = req.headers.uname;
    const password = req.headers.pass;

    authData.push({
        name: username,
        password: password
    })

    fs.writeFileSync('a.json', JSON.stringify(authData));
    res.status(200).send("Successfully signed up");

})

app.post("/signin", authentication, function (req, res) {
    const username = req.headers.uname;
    var token = jwt.sign({ username: username }, jwtPass);
    return res.json({
        message: "Welcome to ResideHUB!",
        token,
    });
})

app.get("/users", tokenverification, function (req, res) {

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