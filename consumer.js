function getURL(done) {
    const results = fetch("https://api.waifu.im/search?included_tags=waifu");

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        })
}

getURL(data => {
    console.log(data)
});