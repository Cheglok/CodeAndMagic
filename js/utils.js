'use strict';
(function () {
  // Поиск наибольшего значения в массиве
  var getMaxFromArr = function (arr) {
    if (!arr.length) {
      return 0;
    }
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  // Случайный элемент из массива
  var getRandomFromArray = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  // Устранение дребезга
  var DEBOUNCE_INTERVAL = 500;

  var debounce = function (fun) {
    var lastTimeout = null;

    return function () {
      var args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    getMaxFromArr: getMaxFromArr,
    getRandomFromArray: getRandomFromArray,
    debounce: debounce,
  };
})();
