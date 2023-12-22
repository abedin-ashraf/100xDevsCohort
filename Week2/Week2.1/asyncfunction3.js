const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(err);
    console.log(data);
})


function readAndWriteFile(cb) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        cdata = data + " copyright 2022 Ashraf";
        fs.writeFile("a.txt", function () {
            cb();
        })
    })
}
console.log("done");