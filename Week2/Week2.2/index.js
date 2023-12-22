const express = require('express')
const app = express()
const port = 3000

//Create a todo app that lets users store todos on the the server
// Create a server from scratch in java/c/rust(actix-web) / golang(gurrila framework)

app.get('/', function (req, res) {
    res.send('Hello  World from Express!')
    res.json({
        name: "Ashraf",
        Age: 23,
        Location: "Cape Girardeau"
    })
})
app.post()

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})