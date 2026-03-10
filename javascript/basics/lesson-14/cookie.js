// возвращает куки с указанным name,
// или undefined, если ничего не найдено
/**
 * @param {string} name
 */
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

//Операции обновления или удаления куки должны использовать те же путь и домен
//Обратите внимание: когда мы обновляем или удаляем куки, нам следует использовать только такие же настройки пути и домена, как при установке куки.

/**
 * @param {string | number | boolean} name
 * @param {string | number | boolean} value
 */
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Пример использования:
//setCookie('user', 'John', {secure: true, 'max-age': 3600});

/**
 * @param {string | number | boolean} name
 */
function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}
