let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter(function (x) {
    return x % 2 == 0;
})
console.log(newArr);