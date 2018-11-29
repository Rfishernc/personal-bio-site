import $ from 'jquery';
import projectsComp from './projects';
import techsComp from './tech';
import bioComp from './bio';
import resumeComp from './resume';
import menuComp from './menu';
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

const clickedAndHeld = () => {
  let stillHolding = true;
  document.getElementById('body').addEventListener('mousedown', (event) => {
    stillHolding = true;
    setTimeout(() => {
      if (stillHolding) {
        posX = event.clientX - 100;
        posY = event.clientY - 100;
        menuComp.showMenu(posX, posY, sunMenu);
      }
    }, 1500);
  });
  document.getElementById('body').addEventListener('mouseup', () => {
    stillHolding = false;
    setTimeout(menuComp.hideMenu, 2000);
  });
};

const menuSelect = () => {
  $('.sunMenu').mouseover((event) => {
    const selected = event.target.id;
    menuComp.resetMenu(sunMenu);
    $(`#${selected}`).attr('src', sunMenuHot[`${selected}Hot`]);
  });
  $('.sunMenu').mouseup((event) => {
    svgComp.expandRing(posX, posY);
    switch (event.target.id) {
      case 'sunProjects': projectsComp.projectsBuilder(); break;
      case 'sunTech': techsComp.techsBuilder(); break;
      case 'sunBio': bioComp.bioBuilder(); break;
      case 'sunResume': resumeComp.resumeBuilder(); break;
      default: break;
    }
  });
};

export default {
  clickedAndHeld,
  menuSelect,
};
