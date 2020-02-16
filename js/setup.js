'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var countOfWizards = 4;
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var playerName = document.querySelector('.setup-user-name');

  var onCoatPress = function () {
    var coatColor = COAT_COLOR[window.util.chooseRandomItem(COAT_COLOR)];
    wizardCoat.style.fill = coatColor;
    setupPlayer.querySelector('[name="coat-color"]').value = coatColor;
  };

  var onEyesPress = function () {
    var eyesColor = EYES_COLOR[window.util.chooseRandomItem(EYES_COLOR)];
    wizardEyes.style.fill = eyesColor;
    setupPlayer.querySelector('[name="eyes-color"]').value = eyesColor;
  };

  var onFireballPress = function () {
    var fireballColor = FIREBALL_COLOR[window.util.chooseRandomItem(FIREBALL_COLOR)];
    wizardFireball.style.backgroundColor = fireballColor;
    setupPlayer.querySelector('[name="fireball-color"]').value = fireballColor;
  };

  var loadWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    window.util.doShuffles(wizards);
    for (var i = 0; i < countOfWizards; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.backend.load(loadWizards, alert);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  wizardCoat.addEventListener('click', onCoatPress);

  wizardEyes.addEventListener('click', onEyesPress);

  wizardFireball.addEventListener('click', onFireballPress);

  playerName.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });
})();
