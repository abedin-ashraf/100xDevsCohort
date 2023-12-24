async function fetchData() {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/persons');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error: ', error);
    }

}

fetchData();