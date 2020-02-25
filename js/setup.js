'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var playerName = document.querySelector('.setup-user-name');

  var wizard = {
    onCoatPress: function () {},
    onEyesPress: function () {}
  };

  var onCoatPress = function () {
    var newColor = COAT_COLOR[window.util.chooseRandomItem(COAT_COLOR)];
    wizardCoat.style.fill = newColor;
    setupPlayer.querySelector('[name="coat-color"]').value = newColor;
    wizard.onCoatPress(newColor);
  };

  var onEyesPress = function () {
    var newColor = EYES_COLOR[window.util.chooseRandomItem(EYES_COLOR)];
    wizardEyes.style.fill = newColor;
    setupPlayer.querySelector('[name="eyes-color"]').value = newColor;
    wizard.onEyesPress(newColor);
  };

  var onFireballPress = function () {
    var fireballColor = FIREBALL_COLOR[window.util.chooseRandomItem(FIREBALL_COLOR)];
    wizardFireball.style.backgroundColor = fireballColor;
    setupPlayer.querySelector('[name="fireball-color"]').value = fireballColor;
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  wizardCoat.addEventListener('click', onCoatPress);

  wizardEyes.addEventListener('click', onEyesPress);

  wizardFireball.addEventListener('click', onFireballPress);

  playerName.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  window.setup = {
    wizard: wizard
  };

})();
