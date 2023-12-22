//Database Side
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");
const Profile = mongoose.model("Profiles", { email: String, password: String });

const newPerson = new Profile({
    email: "kajal@gmail.com",
    password: "kajal"
})
// newPerson.save().then(() => {
//     console.log("Added");
// })
const filter = { email: "kajal@gmail.com" };
const update = { password: "kajal" };

Profile.updateOne(filter, update).then(() => {
    console.log("Updated")
})
// let doc = Profile.updateOne();
