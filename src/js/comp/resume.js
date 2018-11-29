import $ from 'jquery';

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
  const tempString = `<div class='fullPage' id='resumePage'>
                        <p class='title'>Resume</p>
                      </div>`;
  $('#resumePage').html(tempString);
  // $('.mainPage').hide();
  $('#resumePage').show();
  clipForResume();
  setTimeout(hideForResume, 4000);
};

export default {
  resumeBuilder,
};
