'use strict';
(function () {
  var DOWNLOAD_URL = 'https://24.javascript.pages.academy/code-and-magick/data';
  var UPLOAD_URL = 'https://24.javascript.pages.academy/code-and-magick';

  var addEventListeners = function (onSuccess, onError, request) {
    request.addEventListener('load', function () {
      if (request.status === 200) {
        onSuccess(request.response);
      } else {
        onError('Статус ответа: ' + request.status + ' ' + request.statusText);
      }
    });

    request.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    request.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться в течение ' + request.timeout + 'мс');
    })
  }

  var download = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    addEventListeners(onSuccess, onError, xhr);

    xhr.timeout = 10000;
    xhr.open('GET', DOWNLOAD_URL);
    xhr.send();
  };

  var upload = function (data, onSuccess, onError) {
    console.log(data)
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    addEventListeners(onSuccess, onError, xhr);

    xhr.open('POST', UPLOAD_URL);
    xhr.send(data);
  };

  window.backend = {
    upload: upload,
    download: download,
  }
})();
