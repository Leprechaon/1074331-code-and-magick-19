'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var countOfWizards = 4;
var setupPlayer = document.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    setup.classList.add('hidden');
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onCoatPress = function () {
  var coatColor = COAT_COLOR[chooseRandomItem(COAT_COLOR)];
  wizardCoat.style.fill = coatColor;
  setupPlayer.querySelector('[name="coat-color"]').value = coatColor;
};

var onEyesPress = function () {
  var eyesColor = EYES_COLOR[chooseRandomItem(EYES_COLOR)];
  wizardEyes.style.fill = eyesColor;
  setupPlayer.querySelector('[name="eyes-color"]').value = eyesColor;
};

var onFireballPress = function () {
  var fireballColor = FIREBALL_COLOR[chooseRandomItem(FIREBALL_COLOR)];
  wizardFireball.style.backgroundColor = fireballColor;
  setupPlayer.querySelector('[name="fireball-color"]').value = fireballColor;
};

var chooseRandomItem = function (arr) {
  var number = arr.length;
  return Math.floor(Math.random() * (number));
};

var doShuffles = function (arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

var createWizzardArr = function (numberOfWizards) {
  var wizardsArr = [];
  var eyesColor = doShuffles(EYES_COLOR);
  var coatColor = doShuffles(COAT_COLOR);
  var wizardName = doShuffles(WIZARD_NAMES);
  var wizardSurname = doShuffles(WIZARD_SURNAME);
  for (var i = 0; i < numberOfWizards; i++) {
    wizardsArr[i] = {
      name: wizardName[i] + wizardSurname[i],
      coatColor: coatColor[i],
      eyesColor: eyesColor[i]
    };
  }
  return wizardsArr;
};
var wizards = createWizzardArr(countOfWizards);

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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

wizardCoat.addEventListener('click', onCoatPress);

wizardEyes.addEventListener('click', onEyesPress);

wizardFireball.addEventListener('click', onFireballPress);
