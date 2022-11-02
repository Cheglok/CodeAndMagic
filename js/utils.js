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

  //Случайный элемент из массива
  var getRandomFromArray = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  window.utils = {
    getMaxFromArr: getMaxFromArr,
    getRandomFromArray: getRandomFromArray
  }
})();
