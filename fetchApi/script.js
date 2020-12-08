async function getPlanets() {
    let url = 'https://handlers.education.launchcode.org/static/planets.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderPlanets() {
    let planets = await getPlanets();
    let html = '';
    planets.forEach(planet => {
        let htmlSegment = `<div class="planet">
                            <img src="${planet.image}" >
                            <h2>${planet.name} ${planet.star}</h2>
                            <div class="moon"><a href="${planet.image}">${planet.distance}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderPlanets();