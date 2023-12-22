let obj = [{
    name: "Mohammed",
    sex: "male"
},
{
    name: "Nurul",
    sex: "male"
},
{
    name: "Abedin",
    sex: "male"
}
]

for (let i = 0; i < obj.length; i++) {
    if (obj[i].sex == "male") {
        console.log(obj[i].name);
    }
}