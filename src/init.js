const getAudioFile = count => `../wow/wow${count}.wav`

const wowCounter = (() => {
  let count = -1;

  return () => {
      count = count < 16 ? count + 1 : 0;
      return count;
  };
})();

$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    new Audio(getAudioFile(wowCounter())).play();

    const dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    const dancerMakerFunction = window[dancerMakerFunctionName];

    const dancer = new dancerMakerFunction(
      $( window ).height() * Math.random(),
      $( window ).width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    new Audio(getAudioFile(wowCounter())).play();
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.toggleClass('stop');
      window.dancers[i].lineUp(i * 100);
    }
  });
});
