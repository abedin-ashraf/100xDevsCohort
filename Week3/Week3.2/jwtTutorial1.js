const jwt = require("jsonwebtoken");

let jwtPassword = require('crypto').randomBytes(64).toString("hex");
// console.log(secret);
let jwtPassword2 = "erieurieruei";

function generateAccessToken(username) {
    return jwt.sign(username, jwtPassword);
}
function generateAccessToken2(username) {
    return jwt.sign(username, jwtPassword2);
}

console.log(generateAccessToken("ashraf"));
console.log(generateAccessToken2("ashraf"));