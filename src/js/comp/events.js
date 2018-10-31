import util from '../helper/util';
import projectsComp from './projects';

function clickedBio() {
  document.getElementById('navToBio').addEventListener('click', () => {
    const tempString = `<div class="fullPage" id="bioPage">
                          <p class='title'>Bio</p>
                          <p class='bio'>I'm some guy.</p>
                      </div>`;
    util.writeToDom(tempString, 'mainPage');
  });
}

function clickedTech() {
  document.getElementById('navToTechnologies').addEventListener('click', () => {
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
  });
}

function clickedProjects() {
  document.getElementById('navToProjects').addEventListener('click', () => {
    const tempString = `<p class='title'>Projects</p>
                        <div class="fullPage" id="projectsPage"></div>`;
    util.writeToDom(tempString, 'mainPage');
    projectsComp.createProjectCards();
  });
}

export default { clickedBio, clickedProjects, clickedTech };
