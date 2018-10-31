import 'bootstrap';
import './index.scss';
import eventz from './js/comp/events';
import projectsComp from './js/comp/projects';

function init() {
  eventz.clickedBio();
  eventz.clickedTech();
  eventz.clickedProjects();
  projectsComp.initialLoad();
}

init();
