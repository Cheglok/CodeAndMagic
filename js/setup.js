// var setupElement = document.querySelector('.setup');
// setupElement.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardsInfo = []

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
  "rgb(56, 159, 117)",
];
var eyesColors = [
  "black",
  "red",
  "blue",
  "yellow",
  "green",
];

var getRandomFromArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var generateWizardsData = function (count, names, lastNames, coatColors, eyesColors) {
  var data = [];
  for (var i = 0; i < count; i++ ) {
    data[i] = {
      name: getRandomFromArray(names) + " " + getRandomFromArray(lastNames),
      coatColor: getRandomFromArray(coatColors),
      eyesColor: getRandomFromArray(eyesColors),
    };
  }
  return data;
};

var wizardsData = generateWizardsData(4, names, lastNames, coatColors, eyesColors);

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsData[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsData[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsData[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}



