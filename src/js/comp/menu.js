import $ from 'jquery';

const showMenu = (posX, posY, image) => {
  document.getElementById('sunProjects').style.left = `${posX - 100}px`;
  document.getElementById('sunProjects').style.top = `${posY - 100}px`;
  document.getElementById('sunTech').style.left = `${posX + 100}px`;
  document.getElementById('sunTech').style.top = `${posY - 100}px`;
  document.getElementById('sunBio').style.left = `${posX + 100}px`;
  document.getElementById('sunBio').style.top = `${posY + 99}px`;
  document.getElementById('sunResume').style.left = `${posX - 80}px`;
  document.getElementById('sunResume').style.top = `${posY + 98}px`;
  $('#sunProjects').attr('src', image.sunProjects).show();
  $('#sunBio').attr('src', image.sunBio).show();
  $('#sunTech').attr('src', image.sunTech).show();
  $('#sunResume').attr('src', image.sunResume).show();
};

const hideMenu = () => {
  $('#sunProjects').hide();
  $('#sunBio').hide();
  $('#sunTech').hide();
  $('#sunResume').hide();
};

const resetMenu = (image) => {
  $('#sunProjects').attr('src', image.sunProjects);
  $('#sunBio').attr('src', image.sunBio);
  $('#sunTech').attr('src', image.sunTech);
  $('#sunResume').attr('src', image.sunResume);
};

export default {
  showMenu,
  hideMenu,
  resetMenu,
};
