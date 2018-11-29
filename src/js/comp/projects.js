import $ from 'jquery';
import projectData from '../data/projectsData';

const hideForProjects = () => {
  $('#techPage').hide();
  $('#resumePage').hide();
  $('#bioPage').hide();
};

const clipForProjects = () => {
  $('#techPage').toggle('.clipMe');
  $('#resumePage').toggle('.clipMe');
  $('#bioPage').toggle('.clipMe');
};

const createProjectCards = () => {
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
    $('#projectsPage').html(tempString);
  }).catch();
};

const projectsBuilder = () => {
  const tempString = `<p class='title'>Projects</p>
                        <div class="fullPage" id="projectsPage"></div>`;
  $('#projectsPage').html(tempString);
  createProjectCards();
  // $('.mainPage').hide();
  $('#projectsPage').show();
  clipForProjects();
  setTimeout(hideForProjects, 4000);
};

const initialLoad = () => {
  const tempString = `<p class='title'>Projects</p>
                        <div class="fullPage" id="projectsPage"></div>`;
  $('#projectsPage').html(tempString);
  createProjectCards();
};

export default {
  createProjectCards,
  initialLoad,
  projectsBuilder,
};
