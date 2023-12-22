function fetchData() {
    console.log("Requesting data from the ChatGPT server......");

    setTimeout(() => {
        console.log("Data recieved from the ChatGPT server: []");
    }, 3000);

    //setTimeout(gotData, 3000);
}
function gotData() {
    console.log("Data recieved from the ChatGPT server: []");
}

fetchData();