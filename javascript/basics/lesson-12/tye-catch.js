import { handleJson } from '../libs/jsonParse.js';

let json = '{"name":"John", "age": 30}'; // данные с сервера
let json2 = '{}';
let json3 = '"{ некорректный json o_O }"';

class TyeCatch {
  getUser() {
    try {
      console.log('Блок который должен выполниться');
      throw new Error('Ошибочка тут вышла');
      //все что после уже не выполниться
    } catch (error) {
      const { message, name } = error;
      console.error(`${name} - ${message}`);
    }
  }

  getUsers() {
    const user1 = 'user';

    function user2() {
      console.log(user1); //замыкание
    }
    try {
      console.log('Блок который должен выполниться');
      user;
      //все что после уже не выполниться\
      user2();
      console.log('В теории выполниться (нет)');
    } catch (error) {
      const { message, name, stack } = error;
      console.error(`${name} - ${message}`);
    }
  }

  //Исключение try catch. Catch никогда не наступит, так как функция выполняется позже, когда движок уже покинул конструкцию
  errors() {
    try {
      setTimeout(function () {
        noSuchVariable; // скрипт упадёт тут
      }, 1000);
    } catch (e) {
      console.log('не сработает');
    }
  }

  errors2() {
    setTimeout(function () {
      try {
        noSuchVariable; // скрипт упадёт тут
      } catch (error) {
        console.log('сработает');
      }
    }, 1000);
  }

  /**
   * @param {string} json
   */
  errors3(json) {
    try {
      if (!handleJson.jsonParse(json)) throw new Error('Пустой объект');
      if (!JSON.parse(json).name) throw new SyntaxError('Некоректный JSON');
      const data = JSON.parse(json);
      console.log(data);
      //На этом все
    } catch (error) {
      //   console.log();
      if (error.name !== 'SyntaxError') {
        console.error(error.message);
      } else {
        throw error; // проброс (*)
      }
    } finally {
      console.log('Я выполнюсь всегда. Удобно использовать с загрузками');
    }
  }
}

const tryCatch = new TyeCatch();

tryCatch.getUser();
tryCatch.getUsers();
tryCatch.errors();
tryCatch.errors2();
tryCatch.errors3(json);
tryCatch.errors3(json2);
tryCatch.errors3(json3);
