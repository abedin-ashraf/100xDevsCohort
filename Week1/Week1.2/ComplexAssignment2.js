let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let big = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > big) {
        big = arr[i];
    }
}

console.log(big);