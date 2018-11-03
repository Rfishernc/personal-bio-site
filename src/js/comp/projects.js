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

function initialLoad() {
  const tempString = `<p class='title'>Projects</p>
                        <div class="fullPage" id="projectsPage"></div>`;
  util.writeToDom(tempString, 'mainPage');
  createProjectCards();
}

export default { createProjectCards, initialLoad };
