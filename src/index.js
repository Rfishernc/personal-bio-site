import $ from 'jquery';
import 'bootstrap';
import './index.scss';

function writeToDom(string, divId) {
  const div = document.getElementById(divId);
  div.innerHTML = string;
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


function clickedBio() {
document.getElementById('navToBio').addEventListener('click', function() {
  let tempString = 
    `<div class="fullPage" id="bioPage">
      <p class='title'>Bio</p>
      <p class='bio'>I'm some guy.</p>
    </div>`;
  writeToDom(tempString, 'mainPage');
})
}

function clickedTech() {
document.getElementById('navToTechnologies').addEventListener('click', function() {
  let tempString = 
    `<div class="fullPage" id="technologiesPage">
      <p class='title'>Technologies</p>
      <ul id='techs'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git</li>
      </ul>
    </div>`;
  writeToDom(tempString, 'mainPage');
})
}

function clickedProjects() {
document.getElementById('navToProjects').addEventListener('click', function() {
  let tempString = 
    `<p class='title'>Projects</p>
    <div class="fullPage" id="projectsPage"></div>`;
  writeToDom(tempString, 'mainPage');
  createProjectCards();
})
}

clickedBio();
clickedTech();
clickedProjects();