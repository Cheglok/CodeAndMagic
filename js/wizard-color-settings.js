'use strict';
(function () {
  var availableCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var availableEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];
  var availableFireballsColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var setup = document.querySelector('.setup');
  var wizardEyesElement = setup.querySelector('.wizard-eyes');
  var wizardCoatElement = setup.querySelector('.wizard-coat');
  var wizardFireballElement = setup.querySelector('.setup-fireball-wrap');

  var coatColorInput = setup.querySelector('[name="coat-color"]');
  var eyesColorInput = setup.querySelector('[name="eyes-color"]');
  var fireballColorInput = setup.querySelector('[name="fireball-color"]');


  var changeElementColor = function (element, input, colors) {
    var color = window.utils.getRandomFromArray(colors);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    input.value = color;
  }

  var changeEyesColor = function () {
    changeElementColor(wizardEyesElement, eyesColorInput, availableEyesColors);
  };

  var changeCoatColor = function () {
    changeElementColor(wizardCoatElement, coatColorInput, availableCoatColors);
  };

  var changeFireballColor = function () {
    changeElementColor(wizardFireballElement, fireballColorInput, availableFireballsColors);
  };

  var addListeners = function (element, func) {
    element.addEventListener('click', func);
    element.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        func();
      }
    });
  }

  addListeners(wizardEyesElement, changeEyesColor);
  addListeners(wizardCoatElement, changeCoatColor);
  addListeners(wizardFireballElement, changeFireballColor);
})();
