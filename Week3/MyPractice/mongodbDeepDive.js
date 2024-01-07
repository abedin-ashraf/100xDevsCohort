const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})
const CourseSchema = new mongoose.Schema({
    title: String,
    price: Number,
})

const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);