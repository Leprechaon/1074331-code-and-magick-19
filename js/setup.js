'use strict';
(function () {
  var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
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

  var createWizards = function (numberOfWizards) {
    var wizards = [];
    var eyesColor = window.util.doShuffles(EYES_COLOR);
    var coatColor = window.util.doShuffles(COAT_COLOR);
    var wizardName = window.util.doShuffles(WIZARD_NAMES);
    var wizardSurname = window.util.doShuffles(WIZARD_SURNAME);
    for (var i = 0; i < numberOfWizards; i++) {
      wizards[i] = {
        name: wizardName[i] + wizardSurname[i],
        coatColor: coatColor[i],
        eyesColor: eyesColor[i]
      };
    }
    return wizards;
  };
  var wizards = createWizards(countOfWizards);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');

  wizardCoat.addEventListener('click', onCoatPress);

  wizardEyes.addEventListener('click', onEyesPress);

  wizardFireball.addEventListener('click', onFireballPress);

  playerName.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });
})();
