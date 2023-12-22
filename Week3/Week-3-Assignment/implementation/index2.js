const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


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
    image: String

});
const PurchaseSchema = new mongoose.Schema({
    token: String,
    arrayOfObjects: [CourseSchema]
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const Purchase = mongoose.model('Purchase', PurchaseSchema);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const existingAdmin = jwt.verify(req.body.authorization, "secret");
        next();
    } catch (error) {
        console.error("Token verification failed: ", error.message);
    }

}
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const existingUser = jwt.verify(req.body.authorization, "secret");
        next();
    } catch (error) {
        console.error("Token verification failed: ", error.message);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";


// Admin Routes
app.post('/admin/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.status(200).json({ message: 'Admin created successfully' });
});

app.post('/admin/signin', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.status(200).json({
        token: jwt.sign({
            username: req.body.username,
            password: req.body.password
        }, jwtPassword)
    })
});

app.post('/admin/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image

    })
    res.json({
        message: "Course created successfully",
        courseId: "Course ID"
    })
});

app.get('/admin/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((data) => {
        res.json(data);
    })
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// User Routes
app.post('/user/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    res.json({
        message: "User created successfully"
    })
});

app.post('/user/signin', (req, res) => {
    // Implement admin signup logic
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    res.json({
        token: jwt.sign({
            username: req.body.username,
            password: req.body.password,
        }, jwtPassword)
    })
});

app.get('/user/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((data) => {
        res.json(data);
    })
});

app.post('/user/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    Course.find({ _id: req.params.courseId }).then((data) => {
        Purchase.create({

            token: req.body.authorization,
            arrayOfObjects: data,
        })
    })
    res.json({
        message: "Course purchased successfully"
    })

})

app.get('/user/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    Purchase.find({ token: req.body.authorization }).then((data) => {
        res.json(data);
    })
});





/////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use((err, req, res, next) => {
    res.json({
        message: "Error"
    })
    console.log(err);
})
app.all("*", (req, res) => {
    res.json({
        message: "Invalid route"
    })
})
app.listen(3000);

