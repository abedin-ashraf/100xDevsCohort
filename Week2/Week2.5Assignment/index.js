//Kidney Server

const users = [{
    name: "John",
    kidneys: [{
        healthy: false,
    }]
}]

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.route("/")
    .get(function (req, res) {
        const kidney = users[0].kidneys;
        const numberOfKidneys = kidney.length;
        //Filter
        let numberOfHealthyKidneys = 0;
        for (let i = 0; i < numberOfKidneys; i++) {
            if (kidney[i].healthy) {
                numberOfHealthyKidneys++;
            }
        }
        const numberOfUnhealtyKidney = numberOfKidneys - numberOfHealthyKidneys;
        res.json({
            numberOfKidneys,
            numberOfHealthyKidneys,
            numberOfUnhealtyKidney
        });

    })
    .post(function (req, res) {
        if (isThereAnyUnhealthyKindey() <= 0) {
            res.status(411).json({
                "You don't have any bad kidney": true,
            })
        }
        else {
            const isHealthy = req.body.isHealthy;
            users[0].kidneys.push({
                healthy: isHealthy
            })
            res.status(200).json({
                message: "Done",
            });
            console.log(users[0]);
        }
    })
    .put(function (req, res) {
        //if you don't have any unhealthy kidney return status code 411
        if (isThereAnyUnhealthyKindey() <= 0) {
            res.status(411).json({
                "You don't have any bad kidney": true,
            })
        }
        else {
            for (let i = 0; i < users[0].kidneys.length; i++) {
                users[0].kidneys[i].healthy = true;
            }
            res.status(200).json({
                "UnhealthyKidneyTransplanted": true
            });
        }
    })
    .delete(function (req, res) {
        //If you don't have any unhealthy kidney return status code 411
        if (isThereAnyUnhealthyKindey() <= 0) {
            res.status(411).json({
                "You don't have any bad kidney": true,
            })
        }
        else {
            let newKidneys = [];
            for (let i = 0; i < users[0].kidneys.length; i++) {
                if (users[0].kidneys[i].isHealthy == true) {
                    newKidneys.push({
                        healthy: true,
                    });
                }
            }
            users[0].kidneys = newKidneys;
            res.status(200).json({
                "message": "Done"
            })
        }
    })

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})

function isThereAnyUnhealthyKindey() {
    let unhealthyKidney = 0;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].isHealthy != true) {
            unhealthyKidney++;
        }
    }
    return unhealthyKidney;
}