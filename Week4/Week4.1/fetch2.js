async function fetchDataWithErrors() {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/persons');
        if (!response.ok) {
            throw new Error("Request Failed with Status " + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}
fetchDataWithErrors();