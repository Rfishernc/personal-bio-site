import projectData from '../data/projectsData';
import util from '../helper/util';

function createProjectCards() {
  projectData.getProjects().then((projects) => {
    let tempString = '';
    for (let i = 0; i < projects.length; i += 1) {
      const prop = Object.getOwnPropertyNames(projects[i]);
      if (projects[i].available === true) {
        tempString += `<div class='card'>
                        <h3 class='cardTitle'>${projects[i].title}</h3>
                        <img src='${projects[i].screenshot}' class='cardScreen'>
                        <p class='cardPar'>${prop[2]}: ${projects[i].description}</p>
                        <p class='cardPar'>${prop[3]}: ${projects[i].technologiesUsed}</p>
                        <a href='${projects[i].url}' target='_blank' class='cardLink'>Project Link</a>
                        <a href='${projects[i].githubUrl}' target='_blank' class='cardLink'>Github Link</a>
                      </div>`;
      }
    }
    util.writeToDom(tempString, 'projectsPage');
  });
}

function initialLoad() {
  createProjectCards();
}

export default { createProjectCards, initialLoad };
