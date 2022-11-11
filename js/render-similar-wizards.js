'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var sortData = function (data, coatColor, eyesColor) {
    var sort = data.sort(function (left, right) {
      return ((left.coatColor === coatColor) * 2 + (left.eyesColor === eyesColor) * 1)
        - ((right.coatColor === coatColor) * 2 + (right.eyesColor === eyesColor) * 1);
    });
    debugger
    return sort;
  };


  // Отрисовка похожих волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderSimilarWizards = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
  };


  var successHandler = function (data) {
    renderSimilarWizards(sortData(data, 'rgb(101, 137, 164)', 'black'));
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
