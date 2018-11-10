import $ from 'jquery';
import projectsComp from './projects';
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
    projectsComp.hideMenu();
  });
}

function menuSelect() {
  $('.sunMenu').mouseover((event) => {
    const selected = event.target.id;
    projectsComp.resetMenu(sunMenu);
    $(`#${selected}`).attr('src', sunMenuHot[`${selected}Hot`]);
  });
  $('.sunMenu').mouseup((event) => {
    switch (event.target.id) {
      case 'sunProjects': projectsComp.projectsBuilder(); break;
      case 'sunTech': projectsComp.techBuilder(); break;
      case 'sunBio': projectsComp.bioBuilder(); break;
      case 'sunResume': projectsComp.resumeBuilder(); break;
      default: break;
    }
  });
}

export default {
  clickedAndHeld, menuSelect,
};
