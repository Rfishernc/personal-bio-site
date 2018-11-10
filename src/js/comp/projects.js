import $ from 'jquery';
import projectData from '../data/projectsData';
import util from '../helper/util';

function createProjectCards() {
  projectData.getProjects().then((projects) => {
    let tempString = '';
    for (let i = 0; i < projects.data.length; i += 1) {
      const prop = Object.getOwnPropertyNames(projects.data[i]);
      if (projects.data[i].available === true) {
        tempString += `<div class='card'>
                        <h3 class='cardTitle'>${projects.data[i].title}</h3>
                        <img src='${projects.data[i].screenshot}' class='cardScreen'>
                        <p class='cardPar'>${prop[2]}: ${projects.data[i].description}</p>
                        <p class='cardPar'>${prop[3]}: ${projects.data[i].technologiesUsed}</p>
                        <a href='${projects.data[i].url}' target='_blank' class='cardLink'>Project Link</a>
                        <a href='${projects.data[i].githubUrl}' target='_blank' class='cardLink'>Github Link</a>
                      </div>`;
      }
    }
    util.writeToDom(tempString, 'projectsPage');
  }).catch();
}

function bioBuilder() {
  const tempString = `<div class="fullPage" id="bioPage">
                          <p class='title'>Bio</p>
                          <p class='bio'>I'm some guy.</p>
                      </div>`;
  util.writeToDom(tempString, 'mainPage');
}

function techBuilder() {
  const tempString = `<div class="fullPage" id="technologiesPage">
                          <p class='title'>Technologies</p>
                          <ul id='techs'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Git</li>
                          </ul>
                        </div>`;
  util.writeToDom(tempString, 'mainPage');
}

function projectsBuilder() {
  const tempString = `<p class='title'>Projects</p>
                        <div class="fullPage" id="projectsPage"></div>`;
  util.writeToDom(tempString, 'mainPage');
  createProjectCards();
}

function resumeBuilder() {
  const tempString = `<div class='fullPage' id='resumePage'>
                        <p class='title'>Resume</p>
                      </div>`;
  util.writeToDom(tempString, 'mainPage');
}

function initialLoad() {
  const tempString = `<p class='title'>Projects</p>
                        <div class="fullPage" id="projectsPage"></div>`;
  util.writeToDom(tempString, 'mainPage');
  createProjectCards();
}

function showMenu(posX, posY, image) {
  document.getElementById('sunProjects').style.left = `${posX - 100}px`;
  document.getElementById('sunProjects').style.top = `${posY - 100}px`;
  document.getElementById('sunTech').style.left = `${posX + 100}px`;
  document.getElementById('sunTech').style.top = `${posY - 100}px`;
  document.getElementById('sunBio').style.left = `${posX + 100}px`;
  document.getElementById('sunBio').style.top = `${posY + 99}px`;
  document.getElementById('sunResume').style.left = `${posX - 80}px`;
  document.getElementById('sunResume').style.top = `${posY + 98}px`;
  $('#sunProjects').attr('src', image.sunProjects).show();
  $('#sunBio').attr('src', image.sunBio).show();
  $('#sunTech').attr('src', image.sunTech).show();
  $('#sunResume').attr('src', image.sunResume).show();
}

function hideMenu() {
  $('#sunProjects').hide();
  $('#sunBio').hide();
  $('#sunTech').hide();
  $('#sunResume').hide();
}

function resetMenu(image) {
  $('#sunProjects').attr('src', image.sunProjects);
  $('#sunBio').attr('src', image.sunBio);
  $('#sunTech').attr('src', image.sunTech);
  $('#sunResume').attr('src', image.sunResume);
}

export default {
  createProjectCards,
  initialLoad,
  showMenu,
  hideMenu,
  bioBuilder,
  techBuilder,
  resumeBuilder,
  projectsBuilder,
  resetMenu,
};
