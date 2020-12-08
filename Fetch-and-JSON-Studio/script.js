const astronauts = document.getElementById("astronauts");
const count = document.getElementById("count");
const loadAstronauts = async () => {
  try {
    const res = await fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    );
    const data = await res.json();
    console.log(data);
    count.innerText = `${data.length} Astronauts`;
    const htmlString = data
      .sort((a, b) => a.hoursInSpace - b.hoursInSpace)
      .map(
        (astronaut) => `<div class="astronaut">
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
</div>
`
      )
      .join("");
    console.log(htmlString);
    astronauts.innerHTML = htmlString;
    const astronautEls = document.querySelectorAll(".astronaut");
    astronautEls.forEach((astronaut, i) => {
      setTimeout(() => {
        astronaut.classList.add("appear");
      }, i * 1000);
    });
  } catch (err) {
    //console.error(err);
  }
};
loadAstronauts();
