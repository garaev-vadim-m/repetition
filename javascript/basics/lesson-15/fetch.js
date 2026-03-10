//Можно указать явно. По дефолту GET
class SettingsApi {
  _abortController = new AbortController();

  /**
   * @param {string} url
   * @param {RequestInit} params
   */
  get(url, params = {}) {
    return fetch(url, {
      method: 'GET',
      ...params,
      signal: this._abortController.signal,
    });
  }

  /**
   * @param {string} url
   * @param {RequestInit} params
   * @param {any} formData
   */
  post(url, params = {}, formData) {
    return fetch(url, {
      method: 'POST',
      ...params,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: formData,
      signal: this._abortController.signal,
    });
  }
}

const request = new SettingsApi();

request
  .get('url')
  .then((response) => response.json()) //читаем ответ в формате JSON
  .then((data) => data) //сами данные
  .catch((error) => error) //обработка ошибок. В рамках ошибок можно обрывать запрос AbortController
  .finally(() => console.log('finally - isLoading  = false')); // блок который выполниться всегда. В основном используется окончания загрузки

//Упадет один, упадут все
Promise.all([request.get('url'), request.get('url2'), request.get('url3')])
  .then((response) => response)
  .catch((error) => console.error(error))
  .finally(() => console.log('finally'));
