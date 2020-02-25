'use strict';
(function () {
  var wizards = [];
  var colorCoat;
  var colorEyes;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }
    return rank;
  };

  var namesComporator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.loadWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComporator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var onSuccess = function (data) {
    wizards = data;
    updateWizards();
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.setup.wizard.onCoatPress = window.debounce.del(function (color) {
    colorCoat = color;
    updateWizards();
  });

  window.setup.wizard.onEyesPress = window.debounce.del(function (color) {
    colorEyes = color;
    updateWizards();
  });

  window.backend.load(onSuccess, onError);

})();
