async function logPersons() {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const person = await response.json();

    console.log(person);
}
logPersons();