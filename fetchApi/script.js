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
        let htmlSegment = `<div class="user">
                            <img src="${planet.profileURL}" >
                            <h2>${planet.name} ${planet.star}</h2>
                            <div class="moon"><a href="email:${planet.moon}">${planet.diameter}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();