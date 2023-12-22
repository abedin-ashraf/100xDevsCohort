function sum(a, b) {
    console.log(a + b);
}
function sumOf12() {
    return sum(1, 2);
}
setTimeout(sumOf12, 1000);
console.log("hello");