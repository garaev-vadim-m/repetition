let messages = ['message1', 'message2', 'message3'];
const repeat = 50;
//Просто функция
function showMessage() {
  console.log('-'.repeat(repeat));
  console.log('Hello world!');
}

//Параметр
function thisFunction(name) {
  console.log('-'.repeat(repeat));
  let message = [...name];
  console.log(message);
}

//Внешняя переменная
function messages1() {
  console.log('-'.repeat(repeat));
  console.log(messages[0]);
}

//по умолчанию
function message2(text = messages1()) {
  console.log('-'.repeat(repeat));
  text;
}

//значение объекта
let messag3 = {
  functions1: function message4() {
    console.log('-'.repeat(repeat));
    console.log(this); // this функции становится объект messag3
  },
  function2: () => console.log(this), //undefiend - нет своего this
  say: 'hi',
};

//Значение переменной

const messag4 = function () {
  console.log('-'.repeat(repeat));
  console.log(messages[1]);
  return console.log(this);
};

//Вызов
showMessage();
thisFunction('Name');
messages1();
message2();
messag4();
messag3.functions1();
messag3.function2();

//arrow function
let sum = (a, b) => console.log(a + b);
let thisFunction2 = () => console.log(this); // нет своего this

sum(1, 4);
thisFunction2();
