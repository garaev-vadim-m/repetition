let obj1 = new Object(); // синтаксис "конструктор объекта"

let obj2 = {}; // синтаксис "литерал объекта"

console.log(obj1);
console.log(obj2);

obj1.name = 'name1'; //в конструкторе объекта можно создать ключ. Но это не правильно
obj2.name = 'name'; //создаем ключ и записываем значение ключа. В литеральном обьекте "правильно".

Object.defineProperty(obj2, 'female', {
  value: 'very hot',
  writable: true,
  enumerable: true,
  configurable: true,
}); // корректное создание ключа для конструктора объектов

console.log(obj1);
console.log(obj2);
console.log(obj1['name']);
console.log(obj2.female);

Object.defineProperty(obj2, 'neskolso slov', {
  value: 'esli tochnee - dva slova',
  writable: true,
  enumerable: true,
  configurable: true,
}); // Можем создать два слова, но только в ковычках

console.log(obj2);
console.log(obj2['neskolso slov']); //и обратиться можем только так

const KEY_NAME = 'aaaaa';

obj1 = {
  ...obj1, //Можем перезаписать объект и добавить прерыдушие свойта которые записали
  ...obj2, //Можем расширить данные объекта
  [KEY_NAME]: 'bbbb', //можем и так ключ создать\
};

console.log(obj1);

function userData(name, age) {
  return {
    name,
    age,
  };
}

console.log(userData('AAAAA', 12));

console.log('AAAAAAA' in obj1);

obj2 = {
  ...obj2,
  func: function () {
    console.log(this.name);
  },
};

obj2.func();

obj2 = {
  ...obj2,
  func: function () {
    console.log(this.name);
  },

  func2() {
    console.log(this.female);
  },

  func3() {
    console.log('female' in this);
    console.log('notfemale' in this);
  },

  sayHello() {
    let arrow = () => console.log(this.name, 'стрелочная функция');
    arrow(); //нет своего this. В таком случае будет ссылка на функцию sayHello
  },

  arrowFunc: () => console.log(this.name), //Error
};

obj2.func2();
obj2.func3();
obj2.sayHello();
obj2.arrowFunc();

let a1 = obj2; // ссылка на бъект
let a2 = { ...obj2 }; // копирование объекта

a1.privert = 'privet';

a2.poka = 'poka';

// console.log(a1, obj2, a2, obj2);
