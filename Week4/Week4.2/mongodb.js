const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");

const UserSchema = {
    name: String,
    id: {
        type: String,
        unique: true,
        required: true
    },
    date: Date,
}

const User = mongoose.model('Users', UserSchema);

User.create({
    name: "Ashraf",
    id: 12345,
    date: Date.now(),
})