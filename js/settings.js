let setupOpen = document.querySelector('.setup-open');
let setup = document.querySelector('.setup');
let setupClose = setup.querySelector('.setup-close');

const onPopupEscPress = function (evt) {
  if(evt.key === 'Escape') {
    closePopup();
  }
};

const closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);

};

const openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};



setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', closePopup);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter')
  closePopup()
});


let userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
})

userNameInput.addEventListener('invalid', function (evt) {
  if(userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2 символов');
  } else if(userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя должно состоять максимум из 25 символов');
  } else if(userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
})

userNameInput.addEventListener('input', function (evt) {
  let target = evt.target;
  if(target.value.length < 2) {
    target.setCustomValidity('2 symbols min');
  } else if (target.value.length > 7) {
    target.setCustomValidity('wow, long name');
  } else if (target.value === 'qwerty') {
    target.setCustomValidity('damn name');
  } else {
    target.setCustomValidity('');
  }
})



let wizardEyesElement = setup.querySelector('.wizard-eyes');
let wizardCoatElement = setup.querySelector('.wizard-coat');
let wizardFireballElement = setup.querySelector('.setup-fireball-wrap');
let coatColorInput = setup.querySelector('[name="coat-color"]');
let eyesColorInput = setup.querySelector('[name="eyes-color"]');
let fireballColorInput = setup.querySelector('[name="fireball-color"]');


let availableCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
let availableEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];
let availableFireballsColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

var getRandomFromArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

let changeEyesColor = function () {
  let color = getRandomFromArray(availableEyesColors);
  wizardEyesElement.style.fill = color;
  eyesColorInput.value = color;
}

let changeCoatColor = function () {
  let color = getRandomFromArray(availableCoatColors);
  wizardCoatElement.style.fill = color;
  coatColorInput.value = color;
}

let changeFireballColor = function () {
  let color = getRandomFromArray(availableFireballsColors);
  wizardFireballElement.style.background = color;
  fireballColorInput.value = color;

}

wizardEyesElement.addEventListener('click', changeEyesColor);
wizardEyesElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter')
    changeEyesColor();
});
wizardCoatElement.addEventListener('click', changeCoatColor);
wizardCoatElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter')
    changeCoatColor();
});
wizardFireballElement.addEventListener('click', changeFireballColor);
wizardFireballElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter')
    changeFireballColor();
});
