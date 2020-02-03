'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var countOfWizards = 4;
var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomItem = function (arr) {
  var number = arr.length;
  return Math.floor(Math.random() * (number));
};

var createWizzardArr = function (numberOfWizards) {
  var wizardsArr = [];
  for (var i = 0; i < numberOfWizards; i++) {
    var nameNumber = randomItem(WIZARD_NAMES);
    var coatNumber = randomItem(COAT_COLOR);
    var eyesNumber = randomItem(EYES_COLOR);
    wizardsArr[i] = {
      name: WIZARD_NAMES[nameNumber] + WIZARD_SURNAME[nameNumber],
      coatColor: COAT_COLOR[coatNumber],
      eyesColor: EYES_COLOR[eyesNumber]
    };

    WIZARD_SURNAME.splice(nameNumber, 1);
    WIZARD_NAMES.splice(nameNumber, 1);
    COAT_COLOR.splice(coatNumber, 1);
    EYES_COLOR.splice(eyesNumber, 1);
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

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');