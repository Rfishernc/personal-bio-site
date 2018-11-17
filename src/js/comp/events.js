import $ from 'jquery';
import projectsComp from './projects';
import svgComp from './svgComp';
import sunBio from '../../../images/sunBio.png';
import sunProjects from '../../../images/sunProjects.png';
import sunTech from '../../../images/sunTech.png';
import sunResume from '../../../images/sunResume.png';
import sunBioHot from '../../../images/sunBioHot.png';
import sunProjectsHot from '../../../images/sunProjectsHot.png';
import sunTechHot from '../../../images/sunTechHot.png';
import sunResumeHot from '../../../images/sunResumeHot.png';

let posX;
let posY;
const sunMenu = {
  sunProjects, sunTech, sunBio, sunResume,
};
const sunMenuHot = {
  sunProjectsHot, sunTechHot, sunBioHot, sunResumeHot,
};

function clickedAndHeld() {
  let stillHolding = true;
  document.getElementById('body').addEventListener('mousedown', (event) => {
    stillHolding = true;
    setTimeout(() => {
      if (stillHolding) {
        posX = event.clientX - 100;
        posY = event.clientY - 100;
        projectsComp.showMenu(posX, posY, sunMenu);
      }
    }, 1500);
  });
  document.getElementById('body').addEventListener('mouseup', () => {
    stillHolding = false;
    setTimeout(projectsComp.hideMenu, 2000);
  });
}

function menuSelect() {
  $('.sunMenu').mouseover((event) => {
    const selected = event.target.id;
    projectsComp.resetMenu(sunMenu);
    $(`#${selected}`).attr('src', sunMenuHot[`${selected}Hot`]);
  });
  $('.sunMenu').mouseup((event) => {
    svgComp.expandRing(posX, posY);
    switch (event.target.id) {
      case 'sunProjects': setTimeout(() => { projectsComp.projectsBuilder(); }, 4000); break;
      case 'sunTech': setTimeout(() => { projectsComp.techBuilder(); }, 4000); break;
      case 'sunBio': setTimeout(() => { projectsComp.bioBuilder(); }, 4000); break;
      case 'sunResume': setTimeout(() => { projectsComp.resumeBuilder(); }, 4000); break;
      default: break;
    }
  });
}

export default {
  clickedAndHeld, menuSelect,
};
