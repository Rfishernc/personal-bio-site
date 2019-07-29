import $ from 'jquery';
import resumeData from '../data/resumeData';

const hideForResume = () => {
  $('#projectsPage').hide();
  $('#techPage').hide();
  $('#bioPage').hide();
};

const clipForResume = () => {
  $('#ProjectsPage').toggle('.clipMe');
  $('#techPage').toggle('.clipMe');
  $('#bioPage').toggle('.clipMe');
};

const resumeBuilder = () => {
  resumeData.getResume().then((resume) => {
    const tempString = `<div class='fullPage' id='resumePage'>
    <iframe id='resumeFrame' src=${resume}/>
  </div>`;
    $('#resumePage').html(tempString);
    // $('.mainPage').hide();
    $('#resumePage').show();
    clipForResume();
    hideForResume();
  })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  resumeBuilder,
};
