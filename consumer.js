const _obtencion = document.getElementById('app');

async function readAPI() {
    const request = await fetch(`https://nekos.best/api/v2/kick?amount=20`);
    const response = await request.json();
    const data = response.results;
    data.forEach((e) => {
        const render = document.createElement('section');

        render.className = 'recorte';

        render.innerHTML = `
            <h2>${e.anime_name}</h2>
            <img src="${e.url}" alt="${e.anime_name}">
        `;

        _obtencion.appendChild(render);
    })
}
readAPI();