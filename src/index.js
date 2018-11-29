import 'bootstrap';
import './index.scss';
import eventz from './js/comp/events';
import projectsComp from './js/comp/projects';

const init = () => {
  eventz.menuSelect();
  projectsComp.initialLoad();
  eventz.clickedAndHeld();
};

init();
