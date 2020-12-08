async function getAstronauts() {
  let url = "https://handlers.education.launchcode.org/static/astronauts.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderAstronauts() {
  let astronauts = await getAstronauts();
  let html = "";
  astronauts.forEach((astronaut) => {
    let htmlSegment = `<div class="astronaut">
        <div class="bio">
        <h3>${astronaut.firstName} - ${astronaut.lastName}</h3>
        <ul>
           <li>Hours in Space: ${astronaut.hoursInSpace}</li>
           <li class="${astronaut.active ? "active" : ""}">Active: ${
      astronaut.active
    }</li>
           <li>Skills: ${astronaut.skills.join(", ")}</li>
        </ul>
     </div>
     <img class="avatar" src="${astronaut.picture}">
    </div>`;

    html += htmlSegment;
    console.log(htmlSegment)
  });

  const container = document.getElementById("astronauts");
  container.innerHTML= html;
}

renderAstronauts();
