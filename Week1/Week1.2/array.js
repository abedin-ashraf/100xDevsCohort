
//Array & Objects
let namearr = ["Mohammed", "Nurul", "Abedin", "Ashraf"];
let ages = [11, 12, 13, 14];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
        // console.log(namearr[i]);
    }
}

//Object
let obj = { name: "Ashraf", age: 23 };
console.log(obj.age);

//Objects Array
let ob = [{ name: "Ashraf", age: 23 },
{ name: "Abedin", age: 22 }];
console.log(ob[0].name);