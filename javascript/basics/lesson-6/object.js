// Создание объектов разными способами
const obj1 = new Object(); // синтаксис "конструктор объекта" - устаревший способ
const obj2 = {}; // синтаксис "литерал объекта" - современный и предпочтительный способ

console.log('Объекты после создания:');
console.log('obj1 (конструктор):', obj1);
console.log('obj2 (литерал):', obj2);

// ============= ДОБАВЛЕНИЕ СВОЙСТВ =============

// Простое добавление свойств (не рекомендуется для конструктора)
obj1.name = 'name1'; // так можно, но лучше использовать литералы
obj2.name = 'name'; // в литеральном объекте так делать "правильно"

// Правильный способ добавления свойств через defineProperty
Object.defineProperty(obj2, 'female', {
  value: 'very hot',
  writable: true, // можно изменять значение
  enumerable: true, // будет видно при перечислении
  configurable: true, // можно удалять и изменять атрибуты
});

console.log('\nПосле добавления простых свойств:');
console.log('obj1:', obj1);
console.log('obj2:', obj2);
console.log('obj1["name"]:', obj1['name']);
console.log('obj2.female:', obj2.female);

// Свойства с пробелами в имени
Object.defineProperty(obj2, 'neskolko slov', {
  value: 'esli tochnee - dva slova',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log('\nСвойство с пробелами в имени:');
console.log('obj2:', obj2);
console.log('obj2["neskolko slov"]:', obj2['neskolko slov']); // доступ только через квадратные скобки

// ============= РАСШИРЕНИЕ ОБЪЕКТОВ =============

// Динамическое создание ключа
const KEY_NAME = 'aaaaa';

// Перезапись объекта с расширением
const obj1Updated = {
  ...obj1, // копируем все свойства из obj1
  ...obj2, // добавляем свойства из obj2
  [KEY_NAME]: 'bbbb', // создаем ключ из переменной
};

console.log('\nОбновленный obj1:');
console.log(obj1Updated);

// ============= ФАБРИКА ОБЪЕКТОВ =============

/**
 * Функция-фабрика для создания объектов пользователей
 * @param {string} name - имя пользователя
 * @param {number} age - возраст
 * @returns {Object} объект с данными пользователя
 */
function createUser(name, age) {
  return {
    name, // сокращенная запись (вместо name: name)
    age,  // сокращенная запись (вместо age: age)
  };
}

console.log('\nФабрика объектов:');
console.log(createUser('AAAAA', 12));

// ============= ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВ =============

console.log('\nПроверка существования свойства "AAAAAAA" в obj1:');
console.log('AAAAAAA' in obj1Updated); // оператор in проверяет наличие свойства

// ============= МЕТОДЫ ОБЪЕКТА =============

// Обновляем obj2 с добавлением методов
const obj2WithMethods = {
  ...obj2,
  
  // Обычная функция как метод
  showName: function() {
    console.log('Имя из метода showName:', this.name);
  },
  
  // Сокращенный синтаксис методов (ES6)
  showFemale() {
    console.log('female из метода showFemale:', this.female);
  },
  
  // Метод с проверкой наличия свойств
  checkProperties() {
    console.log('"female" in this:', 'female' in this);
    console.log('"notfemale" in this:', 'notfemale' in this);
  },
  
  // Метод со стрелочной функцией внутри
  sayHello() {
    // Стрелочная функция не имеет своего this, 
    // поэтому берет this из внешней функции sayHello
    const arrow = () => {
      console.log('Привет от стрелочной функции:', this.name);
    };
    arrow();
  },
  
  // Стрелочная функция как метод (НЕ РАБОТАЕТ КАК ОЖИДАЕТСЯ!)
  // arrowFunc: () => console.log(this.name), // this будет глобальным объектом
};

// Сохраняем обновленный объект обратно в obj2
// obj2 = obj2WithMethods; // закомментировано, чтобы не потерять ссылки

// Для демонстрации создадим новый объект
const demoObj = obj2WithMethods;

console.log('\nВызов методов объекта:');
demoObj.showName();
demoObj.showFemale();
demoObj.checkProperties();
demoObj.sayHello();

// ============= КОПИРОВАНИЕ ОБЪЕКТОВ =============

// Создаем тестовый объект
const originalObject = {
  name: 'Original',
  age: 25
};

// Ссылка на объект (не копия!)
const objectReference = originalObject;

// Поверхностное копирование объекта
const objectCopy = { ...originalObject };

// Добавляем свойства для демонстрации различий
objectReference.newProperty = 'добавлено через ссылку';
objectCopy.anotherProperty = 'добавлено в копию';

console.log('\n=== ДЕМОНСТРАЦИЯ ССЫЛОК И КОПИРОВАНИЯ ===');
console.log('Оригинал:', originalObject);
console.log('Ссылка на объект:', objectReference);
console.log('Копия объекта:', objectCopy);

console.log('\nОбратите внимание:');
console.log('- Свойство, добавленное через ссылку, появилось в оригинале');
console.log('- Свойство, добавленное в копию, НЕ появилось в оригинале');

// ============= ДОПОЛНИТЕЛЬНЫЕ ПРИМЕРЫ =============

// Дескрипторы свойств
console.log('\n=== ДЕСКРИПТОРЫ СВОЙСТВ ===');
const propertyDescriptor = Object.getOwnPropertyDescriptor(demoObj, 'female');
console.log('Дескриптор свойства "female":', propertyDescriptor);

// Получение всех ключей объекта
console.log('\nКлючи объекта demoObj:', Object.keys(demoObj));
console.log('Значения объекта demoObj:', Object.values(demoObj));
console.log('Пары ключ-значение:', Object.entries(demoObj));

// Заморозка объекта (делает неизменяемым)
const frozenObject = Object.freeze({
  name: 'Frozen',
  value: 42
});

// frozenObject.name = 'New Name'; // Ошибка в strict mode, игнорируется в обычном режиме
console.log('\nЗамороженный объект:', frozenObject);
console.log('Объект заморожен?', Object.isFrozen(frozenObject));