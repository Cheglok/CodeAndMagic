'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizards = [];

  // Отрисовка похожих волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.colors.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colors.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var nameComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var sortWizards = function () {
    return wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        return nameComparator(left.name, right.name);
      }
      return rankDiff;
    });
  };

  var renderSimilarWizards = function () {
    similarListElement.innerHTML = '';
    var sortedWizards = sortWizards();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(sortedWizards[i]));
    }
    similarListElement.appendChild(fragment);
  };


  var successHandler = function (data) {
    wizards = data;
    renderSimilarWizards();
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (msg) {
    var divNode = document.createElement('div');
    divNode.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color:' +
      ' red; position: absolute; left: 0; right: 0; font-size: 30px';
    divNode.textContent = msg;
    document.body.insertAdjacentElement('afterbegin', divNode);
  };

  window.backend.download(successHandler, errorHandler);

  window.renderSimilarWizards = renderSimilarWizards;
})();

