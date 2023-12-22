const mongoose = require("mongoose");
//One Way
const blog = mongoose.model('blog', {
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})
const blog1 = new blog({
    title: "Blog1",
    author: "Ashraf",
    body: "This is my first blog",
    comments: [{ body: "Liked it", date: Date.now() }],
    hidden: false,
    meta: {
        vote: 11,
        favs: 3
    }
})
blog1.save().then(() => {
    console.log("Saved");
})

//Another Way
const Animal = mongoose.model("Animal", { name: String, legs: Number });
const dog = new Animal();


mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");
