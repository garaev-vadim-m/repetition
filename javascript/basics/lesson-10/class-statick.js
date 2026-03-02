class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

//Присвоить метод напрямую как свойство функции
//Значением this при вызове User.staticMethod() является сам конструктор класса User (правило «объект до точки»).
class User2 {}

User2.staticMethod = function () {
  console.log(this === User);
};

class Article {
  /**
   * @param {string} title
   * @param {Date} date
   */
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  /**
   * @param {{ date: number; }} articleA
   * @param {{ date: number; }} articleB
   */
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// использование
const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

// @ts-ignore
articles.sort(Article.compare);

console.log(articles[0].title); // CSS

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
// let filteredArr = arr.filter((item) => item >= 10);

// filteredArr не является PowerArray, это Array
// console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
