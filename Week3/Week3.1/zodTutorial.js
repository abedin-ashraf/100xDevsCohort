let z = require("zod");
const Dog = z.object({
    name: z.string(),
    age: z.number(),
});

console.log(Dog.safeParse({
    name: "kutta",
    age: "2"
}))
console.log(Dog.shape.name);
