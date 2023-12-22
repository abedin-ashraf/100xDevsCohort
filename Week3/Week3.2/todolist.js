const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/");
const Todo = mongoose.model("Todos", { name: String, completed: Boolean, description: String });
// const todo1 = new Todo({
//     name: "todo1",
//     completed: false,
//     description: "This is my first todo"
// })
// todo1.save().then(() => {
//     console.log("Todo1 saved");
// })
app.get("/", function (req, res) {
    Todo.find({})
        .then(data => {
            // Display the retrieved data
            res.status(200).json({
                data
            })
        })
        .catch(error => {
            res.json({
                message: "There is some error to our end! SORRY"
            })
            console.error("Error retrieving data:", error);
        })
})
app.get("/:name", async function (req, res) {
    const name = req.params.name;
    const existingTodo = await Todo.findOne({ name: name });
    if (!existingTodo) {
        res.status(404).json({
            message: "No todo item with that name"
        })
    } else {
        res.status(404).json({
            existingTodo
        })
    }
})

app.post("/add", async function (req, res) {
    const name = req.body.name;
    const completed = req.body.completed;
    const description = req.body.description;
    const existingUser = await Todo.findOne({ name: name });
    if (existingUser) {
        res.status(400).json({
            message: "There is already one todo with this name"
        })
    } else {
        const todo = new Todo({
            name: name,
            completed: completed,
            description: description
        })
        todo.save().then(() => {
            res.status(200).json({
                message: `Successfully added the ${name} todo to the todolist`
            })
        })
    }

})

app.put("/update/:name", async function (req, res) {
    const name = req.params.name;
    const exisitingUser = await Todo.findOne({ name: name });
    if (!exisitingUser) {
        res.status(404).json({
            message: "There is no todo with this name"
        })
    } else {
        await Todo.updateOne({ name: name }, { completed: true }).then(() => {
            res.status(200).json({
                message: `${name} is updated`
            })
        })
    }
})

app.delete("/delete/:name", async function (req, res) {
    const name = req.params.name;
    const exisitingUser = await Todo.findOne({ name: name });
    if (!exisitingUser) {
        res.status(404).json({
            message: "There is no todo with this name"
        })
    } else {
        await Todo.deleteOne({ name: name }).then(() => {
            res.status(200).json({
                message: "Successfully deleted"
            })
        })
    }
})

app.delete("/all", function (req, res) {
    Todo.deleteMany({})
        .then(() => {
            res.status(200).json({
                message: "All data are deleted"
            })
        })
        .catch(() => {
            res.status(404).json({
                message: "Error deletign the records"
            })
        })
})

//Global Catch
app.use((err, req, res, next) => {
    console.log(err);
    res.status(404).json({
        message: "there is an error"
    })
})

//Catch all or wild card route
app.all("*", function (req, res) {
    res.status(404).json({
        message: "Invalid Route"
    })
})
app.listen(3000);