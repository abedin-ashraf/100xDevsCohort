const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
})
const User = mongoose.model("Users", UserSchema);

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
        next();
    } else {
        res.json({
            message: "User with this email address is already exists"
        })
    }
}
app.use(userMiddleware);
app.post('/user/signup', (req, res) => {

    // Implement user signup logic
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    res.json({
        message: "User created successfully"
    })
});
app.listen(3000);