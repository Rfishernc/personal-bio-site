let projects = [ {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", 
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", 
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Absurdly Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This project is out of control", 
    technologiesUsed: "COBOL, FORTRAN, binary",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux",
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Frighteningly Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "Please send help, this project's too cool", 
    technologiesUsed: "Vacuum tubes and blinking lights",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", 
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "The Not Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "Project designed by a big jerk", 
    technologiesUsed: "Chalkboard and abacus",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", 
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];

function writeToDom(string, divId) {
    const div = document.getElementById(divId);
    div.innerHTML += string;
}

function createProjectCards() {
    let tempString = '';
    for(let i = 0; i < projects.length; i++) {
        let prop = Object.getOwnPropertyNames(projects[i]);
        if(projects[i].available === true) {
            tempString +=   `<div class='card'>`
            tempString +=       `<h3 class='cardTitle'>${projects[i].title}</h3>`
            tempString +=       `<img src='${projects[i].screenshot}' class='cardScreen'>`
            tempString +=       `<p class='cardPar'>${prop[2]}: ${projects[i].description}</p>`
            tempString +=       `<p class='cardPar'>${prop[3]}: ${projects[i].technologiesUsed}</p>`
            tempString +=       `<a href='${projects[i].url}' target='_blank' class='cardLink'>Project Link</a>`
            tempString +=       `<a href='${projects[i].githubUrl}' target='_blank' class='cardLink'>Github Link</a>`
            tempString +=   `</div>`;
    } }
    writeToDom(tempString, 'projectsPage');
}

createProjectCards();