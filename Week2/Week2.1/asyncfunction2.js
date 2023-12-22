function onDone() {
    console.log("HI There");
}

setTimeout(onDone, 1000);
console.log("After setTimeout");


//AsyncFunction : setTimeout(), setInterval(), readFile()

function sumOf10000() {
    let ans = 0;
    for (let i = 0; i < 10000; i++) {
        ans += i;
    }
    console.log(ans);
}

setTimeout(sumOf10000, 1000);
console.log("After setTimeout2");
