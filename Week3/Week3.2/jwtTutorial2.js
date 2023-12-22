const jwt = require("jsonwebtoken");

// const jwtPassword = require('crypto').randomBytes(64).toString("hex");
// console.log(jwtPassword);

const dotenv = require("dotenv");

//get config vars
dotenv.config();

//access config var
let jwtPassword = process.env.TOKEN_SECRET;


function generateAccessToken(username) {
    return jwt.sign({ username }, jwtPassword, { expiresIn: '1800s' });
}


//Express 
const express = require("express");
const app = express();
app.use(express.json());

app.post('/api/createNewUser', (req, res) => {
    const username = req.body.email;
    const token = generateAccessToken(username);
    res.json(token);
})

//Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader;

    if (token == null) {
        res.status(401).json({
            msg: "Null token"
        });
    }

    jwt.verify(token, jwtPassword, (err, user) => {
        console.log(err);

        if (err) {
            return res.sendStatus(401).json({
                msg: "Error in token verification"
            });
        }
        req.uaer = user;
        next();
    })
}

app.get("/api/userOrders", authenticateToken, (req, res) => {
    res.json({
        msg: "WELCOME"
    })
})

app.listen(3000);