'use strict';
(function () {
  var setup = document.querySelector('.setup');

  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2 символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя должно состоять максимум из 25 символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('2 symbols min');
    } else {
      target.setCustomValidity('');
    }
  })
})();
