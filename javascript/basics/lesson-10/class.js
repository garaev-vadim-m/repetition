//Пример типизации. Удобно для объектов
const TypeUser = {
  name: String(),
  job: Boolean(),
  age: Number(),
};

class User {
  /**
   * @param {typeof TypeUser.name} name
   */
  constructor(name = '') {
    this.name = name;
  }

  /**
   * @param {function} [fun]
   */
  getUser(fun) {
    if (typeof fun === 'function') {
      console.log('Передана функция');
    }
    return this.name;
  }

  /**
   * @param {string} value
   */
  setUser(value) {
    try {
      this.name = this.#_handleUser(value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @param {string} value
   */
  #_handleUser(value) {
    if (typeof value !== 'string') {
      throw new Error('Имя должно быть строкой').message;
    }
    return value;
  }
}

const user = new User('Name');

console.log(user.getUser());

//Named Class Expression
let User2 = class {
  sayHi() {
    console.log('Привет');
  }
};

new User2().sayHi();

//Динамическое создание класса

/**
 * @param {string} phrase
 */
function makeClass(phrase) {
  // объявляем класс и возвращаем его
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Создаём новый класс
let User3 = makeClass('Привет');

new User3().sayHi(); // Привет

class User4 {
  /**
   * @param {string} name
   */
  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Имя слишком короткое.');
      return;
    }
    this._name = value;
  }
}

let user4 = new User4('Иван');
console.log(user.name); // Иван

user4 = new User4(''); // Имя слишком короткое.

class Person extends User {
  getPerson() {
    return this.getUser();
  }

  //   getUser() {
  //     super.getUser();
  //     return this.getPerson();
  //   }
}

let person = new Person();
person.setUser('Пример с наследованием');
console.log(person.getUser());
console.log(person.getPerson());

class Animal {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  /**
   * @param {number} speed
   */
  run(speed) {
    console.log(' ');
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let rabbit = new Rabbit('Белый кролик');

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
