import $ from 'jquery';

const hideForBio = () => {
  $('#projectsPage').hide();
  $('#resumePage').hide();
  $('#techPage').hide();
};

const clipForBio = () => {
  $('#techPage').toggle('.clipMe');
  $('#resumePage').toggle('.clipMe');
  $('#projectsPage').toggle('.clipMe');
};

const bioBuilder = () => {
  const tempString = `<div class="fullPage" id="bioPage">
                          <p class='title'>Bio</p>
                          <p class='bio'>I'm some guy.</p>
                      </div>`;
  $('#bioPage').html(tempString);
  // $('.mainPage').hide();
  $('#bioPage').show();
  clipForBio();
  setTimeout(hideForBio, 4000);
};

export default {
  bioBuilder,
};
