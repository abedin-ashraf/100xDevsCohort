function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}
//DRY (Don't Repeat Yourself)
// function sumOfSquares(a, b) {
//     let square1 = square(a);
//     let square2 = square(b);
//     return square1 + square2;
// }

// function sumOfCube(a, b) {
//     return cube(a) + cube(b);
// }

function sumOfSomething(a, b, fnToCall) {
    return fnToCall(a) + fnToCall(b);
}

//functional Argument
let ans = sumOfSomething(1, 2, square);
console.log(ans);

console.log(sumOfSomething(1, 2, cube));