function myOwnSetTimeout1(fn, duration) {
    setTimeout(fn, duration);
}
myOwnSetTimeout1(function () {
    console.log("hello there")
}, 1000);

//Promisfy this async function
function myOwnSetTimeout(duration) {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, duration);
    });

    return p;
}

//promise
let ans = myOwnSetTimeout(1000);
console.log(ans);
ans.then(function () {
    console.log("Timeout is done");
})

