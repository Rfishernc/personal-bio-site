import 'bootstrap';
import './index.scss';
import eventz from './js/comp/events';
import bioComp from './js/comp/bio';

const init = () => {
  eventz.menuSelect();
  bioComp.initialLoad();
  eventz.clickedAndHeld();
};

init();
