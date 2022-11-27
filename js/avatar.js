'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooser = document.querySelector('#avatar');
  var preview = document.querySelector('.setup-user-pic');


  var handleFile = function (file) {
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  fileChooser.addEventListener('change', function () {
    handleFile(fileChooser.files[0]);
  });

  var dragenter = function (e) {
    e.stopPropagation();
    e.preventDefault();
  };

  var dragover = function (e) {
    e.stopPropagation();
    e.preventDefault();
  };

  var drop = function (e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var file = dt.files[0];

    handleFile(file);
  };

  fileChooser.addEventListener('dragenter', dragenter);
  fileChooser.addEventListener('dragover', dragover);
  fileChooser.addEventListener('drop', drop);
})();
