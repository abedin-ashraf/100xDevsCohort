function sum(a, b) {
    return a + b;
}

function display(data) {
    console.log("The sum is " + data);
}
function displayPassive(data) {
    console.log(data + " is the sum.")
}
displayPassive(sum(1, 2));