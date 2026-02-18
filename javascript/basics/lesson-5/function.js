// Константы и переменные
const messages = ['message1', 'message2', 'message3'];
const REPEAT_COUNT = 50; // Константу лучше именовать в верхнем регистре

/**
 * Простая функция без параметров
 * Выводит разделитель и сообщение
 */
function showMessage() {
  console.log('-'.repeat(REPEAT_COUNT));
  console.log('Hello world!');
}

/**
 * Функция с параметром
 * @param {string} name - имя для преобразования в массив
 */
function processName(name) {
  console.log('-'.repeat(REPEAT_COUNT));
  const messageArray = [...name]; // Более понятное имя переменной
  console.log(messageArray);
}

/**
 * Функция, использующая внешнюю переменную messages
 */
function showFirstMessage() {
  console.log('-'.repeat(REPEAT_COUNT));
  console.log(messages[0]);
}

/**
 * Функция с параметром по умолчанию
 * @param {Function} callback - функция, вызываемая по умолчанию
 */
function executeWithDefault(callback = showFirstMessage) {
  console.log('-'.repeat(REPEAT_COUNT));
  callback(); // Вызываем переданную функцию
}

/**
 * Объект с методами
 */
const messageObject = {
  // Обычная функция (имеет свой this)
  showContext() {
    console.log('-'.repeat(REPEAT_COUNT));
    console.log('this в обычной функции:', this); // this = messageObject
  },
  
  // Стрелочная функция (не имеет своего this)
  showArrowContext: () => {
    console.log('-'.repeat(REPEAT_COUNT));
    console.log('this в стрелочной функции:', this); // this = внешний контекст (global/window)
  },
  
  say: 'hi'
};

/**
 * Function expression
 * Функция, присвоенная переменной
 */
const showSecondMessage = function() {
  console.log('-'.repeat(REPEAT_COUNT));
  console.log(messages[1]);
  // @ts-ignore
  console.log('this в function expression:', this);
};

/**
 * Стрелочные функции
 */
const sum = (a, b) => {
  console.log('-'.repeat(REPEAT_COUNT));
  console.log(`Сумма ${a} + ${b} =`, a + b);
};

const showArrowThis = () => {
  console.log('-'.repeat(REPEAT_COUNT));
  console.log('this в стрелочной функции:', this); // нет своего this
};

// ============= ВЫЗОВ ФУНКЦИЙ =============

console.log('=== Простая функция ===');
showMessage();

console.log('\n=== Функция с параметром ===');
processName('Name');

console.log('\n=== Функция с внешней переменной ===');
showFirstMessage();

console.log('\n=== Функция с параметром по умолчанию ===');
executeWithDefault(); // Вызовется showFirstMessage
executeWithDefault(() => console.log('Кастомный колбэк'));

console.log('\n=== Function expression ===');
showSecondMessage();

console.log('\n=== Методы объекта ===');
messageObject.showContext();
messageObject.showArrowContext();

console.log('\n=== Стрелочные функции ===');
sum(1, 4);
showArrowThis();