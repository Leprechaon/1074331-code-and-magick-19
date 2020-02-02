'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomItem = function (arr) {
  var number = arr.length;
  return Math.floor(Math.random() * (number));
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  var nameNumber = randomItem(WIZARD_NAMES);
  var coatNumber = randomItem(COAT_COLOR);
  var eyesNumber = randomItem(EYES_COLOR);
  wizards[i] = {
    name: WIZARD_NAMES[nameNumber] + WIZARD_SURNAME[nameNumber],
    coatColor: COAT_COLOR[coatNumber],
    eyesColor: EYES_COLOR[eyesNumber]
  };

  WIZARD_SURNAME.splice(nameNumber, 1);
  WIZARD_NAMES.splice(nameNumber, 1);
  COAT_COLOR.splice(coatNumber, 1);
  EYES_COLOR.splice(eyesNumber, 1);
}

for (var j = 0; j < 4; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;
  similarListElement.appendChild(wizardElement);
}
