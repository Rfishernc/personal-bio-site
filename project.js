let projects = [];

function writeToDom(string, divId) {
    const div = document.getElementById(divId);
    div.innerHTML += string;
}

function createProjectCards() {
    let tempString = '';
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].available === true) {
            tempString +=   `<div class='card'>`
            tempString +=       `<h3 class='cardTitle'>${projects[i].title}</h3>`
            tempString +=       `<img src='${porjects[i].screenshot}' class='cardScreen'>`
            tempString +=       `<p class='cardDescr'>${projects[i].description}</p>`
            tempString +=       `<p class='cardTechUsed'>${projects[i].technologiesUsed}</p>`
            tempString +=       `<a href='${projects[i].url}' class='cardLink'></a>`
            tempString +=       `<a href='${projects[i].githubUrl}' class='cardLink'></a>`
            tempString +=   `</div>`;
    } }
    writeToDom(tempString, 'projectsPage');
}

createProjectCards();