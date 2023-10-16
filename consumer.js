async function readAPI() {
    const request = await fetch(`https://nekos.best/api/v2/dance?amount=20`);
    const response = await request.json();
    console.log(response.results);
}

readAPI();