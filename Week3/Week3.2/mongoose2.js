const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");


//mongoose.model(modelName, schema);
const Person = mongoose.model("Person", { name: String, Age: Number });

const ashraf = new Person({ name: 'Ashraf', age: 23 });

ashraf.save().then(() => {
    console.log("Saved");
})