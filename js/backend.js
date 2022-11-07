'use strict';
(function () {
  var DOWNLOAD_URL = 'https://24.javascript.pages.academy/code-and-magick/data';
  var UPLOAD_URL = 'https://24.javascri pt.pages.academy/code-and-magick';

  var download = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться в течение ' + xhr.timeout + 'мс');
    })

    xhr.timeout = 10000;
    xhr.open('GET', DOWNLOAD_URL);
    xhr.send();
  };

  var upload = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;
        default:
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться в течение ' + xhr.timeout + 'мс');
    })

    xhr.open('POST', UPLOAD_URL);
    xhr.send(data);
  };

  window.backend = {
    upload: upload,
    download: download,
  }
})();
