import { PropertyRequiredError, ValidationError } from '../libs/ValidationError.js';

function test() {
  throw new ValidationError('Упс!');
}

function error1() {
  try {
    test();
  } catch (error) {
    const { name, message, stack } = error;
    console.log(name);
    console.log(message);
    console.log(stack);
  }
}

error1();

// Использование
/**
 * @param {string} json
 */
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('Нет поля: age');
  }
  if (!user.name) {
    throw new ValidationError('Нет поля: name');
  }

  return user;
}

function readUsers() {
  try {
    let user = readUser('{ "age": 25 }');
    return user;
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log('Некорректные данные: ' + err.message); // Некорректные данные: Нет поля: name
    } else if (err instanceof SyntaxError) {
      // (*)
      console.log('JSON Ошибка Синтаксиса: ' + err.message);
    } else {
      throw err; // неизвестная ошибка, пробросить исключение (**)
    }
  }
}

readUsers();

/**
 * @param {string} json
 */
function readUser2(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError('age');
  }
  if (!user.name) {
    throw new PropertyRequiredError('name');
  }

  return user;
}

function readUsers2() {
  try {
    let user = readUser2('{ "age": 25 }');
    return user;
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log('Неверные данные: ' + err.message); // Неверные данные: Нет свойства: name
      console.log(err.name); // PropertyRequiredError
      console.log(err.property); // name
    } else if (err instanceof SyntaxError) {
      console.log('Ошибка синтаксиса JSON: ' + err.message);
    } else {
      throw err; // неизвестная ошибка, повторно выбросит исключение
    }
  }
}

readUsers2();
