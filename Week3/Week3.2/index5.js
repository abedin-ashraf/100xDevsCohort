const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");

const Profile = mongoose.model("Profiles", { name: String, email: String, password: String });

app.use(express.json());

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await Profile.findOne({ email: email });//CRUD
    if (existingUser) {
        res.status(400).send("Email Already Exists");
    }

    const user = new Profile({
        name: username,
        email: email,
        password: password
    })

    user.save();
    res.json({
        msg: "successfully registered"
    })
})

app.listen(3000);