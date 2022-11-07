'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('keydown', function (keyEvt) {
    if (keyEvt.key === 'Escape') {
      keyEvt.stopPropagation();
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

  userNameInput.addEventListener('input', function (inputEvt) {
    var target = inputEvt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('2 symbols min');
    } else {
      target.setCustomValidity('');
    }
  });

  var errorHandler = function (msg) {
    var divNode = document.createElement('div');
    divNode.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color:' +
      ' red; position: absolute; left: 0; right: 0; font-size: 30px';
    divNode.textContent = msg;
    document.body.insertAdjacentElement("afterbegin", divNode);
  };

  form.addEventListener('submit', function (formEvt) {
    formEvt.preventDefault();
    window.backend.upload(new FormData(form), function (response) {
      window.popup.closePopup();
    }, errorHandler)
  });
})();
