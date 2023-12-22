//Server side
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//Database Side
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");
const Profile = mongoose.model("Profiles", { email: String, password: String });

app.use(express.json());


app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await Profile.findOne({ email: email });
    if (existingUser) {
        res.status(404).json({
            message: "Email already exists"
        })
    }
    else {
        const newPerson = new Profile({
            email: email,
            password: password
        })
        newPerson.save().then(() => {
            res.json({
                message: "Thank you for signing up with us"
            })
        })
    }
})

app.get("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await Profile.findOne({ email: email, password: password });
    if (existingUser) {
        res.status(200).json({
            message: `Welcome ${email}`
        })
    }
    else {
        if (await Profile.findOne({ email: email })) {
            res.status(404).json({
                message: "Correct your password"
            })
        }
        else {
            res.status(404).json({
                message: "Email doesn't exists"
            })
        }
    }
})

app.put("/update", async function (req, res) {
    const email = req.body.email;
    const newpassword = req.body.newpassword;
    const existingUser = await Profile.findOne({ email: email });
    if (existingUser) {
        await Profile.updateOne({ email: email }, { password: newpassword }).then(() => {
            res.status(200).json({
                message: "Updated successfully"
            })
        })
    }
    else {
        res.status(404).json({
            message: `Email doesn't exisits`
        })
    }
})

app.delete("/delete", async function (req, res) {
    const email = req.body.email;
    const existingUser = await Profile.findOne({ email: email });
    if (existingUser) {
        await Profile.deleteOne({ email: email }).then(() => {
            res.status(200).json({
                message: "User has been successfully deleted"
            })
        })
    }
    else {
        res.status(404).json({
            message: "Email doesn't exist"
        })
    }
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.json({
        message: "There is an Error"
    })
})

app.listen(3000);