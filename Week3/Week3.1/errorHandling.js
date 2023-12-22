const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// app.get("/", function (req, res) {
//     throw new Error("Broken");
// })

app.get("/", function (req, res, next) {
    fs.readFile("file", (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    })
})

// app.get('/', [
//     function (req, res, next) {
//         fs.writeFile('/inaccessible-path', 'data', next)
//     },
//     function (req, res) {
//         res.send('OK')
//     }
// ])

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         try {
//             throw new Error('BROKEN')
//         } catch (err) {
//             next(err)
//         }
//     }, 100)
// })

// app.get('/', (req, res, next) => {
//     Promise.resolve().then(() => {
//         throw new Error('BROKEN')
//     }).catch(next) // Errors will be passed to Express.
// })

// app.get('/', [
//     function (req, res, next) {
//         fs.readFile('/maybe-valid-file', 'utf-8', (err, data) => {
//             res.locals.data = data
//             next(err)
//         })
//     },
//     function (req, res) {
//         res.locals.data = res.locals.data.split(',')[1]
//         res.send(res.locals.data)
//     }
// ])

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something Broke");
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});