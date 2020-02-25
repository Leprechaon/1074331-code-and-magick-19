'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var countOfWizards = 4;

  var wizard = function (element) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = element.name;
    wizardElement.querySelector('.wizard-coat').style.fill = element.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = element.colorEyes;
    return wizardElement;
  };

  var loadWizards = function (wizards) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < countOfWizards; i++) {
      fragment.appendChild(window.render.wizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.render = {
    wizard: wizard,
    loadWizards: loadWizards
  };
})();
