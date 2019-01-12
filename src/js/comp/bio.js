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
                        <div class='bioDiv'>
                          <p class='title'>About Me</p>
                          <p class='bio'>Ever since my father brought home a Commodore 64 when I was four years old, I've had an interest in computers.   But when it came time to start a career, I was young and convinced I would try to save the world, and in my mind that meant going in a different direction.  Ten years later of climbing the proverbial ladder within the solar power industry and I'd designed and built over 40 megawatts of clean, renewable power.  Yet, I found myself stuck in a position I hated.  Gone were the early days of getting my hands dirty and crafting something through my own skill and ability.  Now my days were spent chasing down payments from investors, haggling over pennies with foreign manufacturers over product that will likely never even be purchased, countless late-night hours on the phone with clients and legal counsel ironing out the minutia of contracts, and wading through an endless stream of issues from contractors.  
                          Giving tremendous respect to the people who can find satisfaction in that line of work, I realized I needed a change.  I wanted to be closer to my work, to get back to  personally building, crafting something through my own ability and knowledge.  With the encouragment of my family, I decided to pursue my lifelong interest in computers and joined Nashville Software School.</p>
                        </div>
                      </div>`;
  $('#bioPage').html(tempString);
  // $('.mainPage').hide();
  $('#bioPage').show();
  clipForBio();
  hideForBio();
};

export default {
  bioBuilder,
};
