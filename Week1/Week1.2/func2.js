function calculate(a, b, fnToCall) {
    return fnToCall(a, b);

}

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

const value = calculate(1, 2, sum);
console.log(value);