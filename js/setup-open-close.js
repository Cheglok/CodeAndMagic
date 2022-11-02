(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  const onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
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
})();
