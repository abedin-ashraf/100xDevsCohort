//If this is an arry of number, return true else return false

function validateInput(arr) {
    if (typeof arr == "object" && arr.length >= 1) {

    }
}

//replacement
const zod = require("zod");
const schema = zod.array(zod.number());
let arr = ['1', '2']

const response = schema.safeParse(arr);
console.log(response);