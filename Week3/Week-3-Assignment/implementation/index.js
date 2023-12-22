const mongoose = require('mongoose');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');


// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const exisitingAdmin = Admin.findOne({ username: req.body.username, password: req.body.password });
    if (exisitingAdmin) {
        next();
    } else {
        res.json({
            message: "No Admin with this email and password"
        })
    }
}
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const existingUser = User.findOne({ username: req.body.username, password: req.body.password });
    if (existingUser) {
        next();
    } else {
        res.json({
            message: "No User with this email and password"
        })
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Admin Routes

app.use(bodyParser.json());
// Admin Routes
app.post('/admin/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: "Admin Created Successfully"
    })
});

app.post('/admin/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.json({
        message: "Course created successfully"
    })
});

app.get('/admin/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course
        .find().then((data) => {
            res.json(data);
        })
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// User Routes
app.post('/user/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: "User created successfully"
    })
});

app.get('/user/courses', (req, res) => {
    // Implement listing all courses logic
    Course
        .find().then((data) => {
            res.json(data);
        })
});

app.post('/user/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    Course
        .findOne({ courseId: req.params.courseId }).then((err, data) => {
            if (err) {
                res.json({
                    message: "Couldn't find a course with this courseId"
                })
            } else {
                res.json({
                    message: "Course purchased successfully"
                })
            }
        })
});

app.get('/user/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    Course
        .findOne(User.create({ username: req.body.username })).then((err, data) => {
            if (err) {
                res.json("There is no user with this data");
            } else {
                res.json(data);
            }
        })

});

app.use((err, req, res, next) => {
    res.json({
        message: "Some error occured"
    })
})
app.all("*", (req, res) => {
    res.send("Invalid Route");
})

app.listen(3000);