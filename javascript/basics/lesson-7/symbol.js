// Создание символов
const idSymbol = Symbol('id');
const femaleSymbol = Symbol('female');
const ageSymbol = Symbol('age');

console.log('=== ОСНОВЫ SYMBOL ===');
console.log('idSymbol:', idSymbol);
console.log('Описание:', idSymbol.description);
console.log('Уникальность:', Symbol('id') === Symbol('id')); // false

// ============= СИМВОЛЫ КАК КЛЮЧИ ОБЪЕКТА =============

const user = {
  name: 'Vadim',
  age: 25, // обычное свойство
};

// Добавляем символьные ключи
user[idSymbol] = 12345;
user[femaleSymbol] = true;
user[ageSymbol] = 30;
user[Symbol('email')] = 'vadim@example.com'; // символ "на лету"

console.log('\n=== ОБЪЕКТ С СИМВОЛАМИ ===');
console.log('user:', user);
console.log('ID по символу:', user[idSymbol]);

// Символы не видны в обычном перечислении
console.log('Object.keys (без символов):', Object.keys(user));
console.log('Только символы:', Object.getOwnPropertySymbols(user));

// ============= ГЛОБАЛЬНЫЕ СИМВОЛЫ =============

const globalId1 = Symbol.for('global.id');
const globalId2 = Symbol.for('global.id'); // тот же символ!

console.log('\n=== ГЛОБАЛЬНЫЙ РЕЕСТР ===');
console.log('globalId1 === globalId2:', globalId1 === globalId2); // true
console.log('Ключ:', Symbol.keyFor(globalId1)); // "global.id"

// ============= ПРАКТИЧЕСКИЙ ПРИМЕР: СКРЫТОЕ СВОЙСТВО =============

const _password = Symbol('password');

const secureUser = {
  name: 'Vadim',
  login: 'vadim123',
  [_password]: 'qwerty' // скрытый пароль
};

console.log('\n=== СКРЫТЫЕ СВОЙСТВА ===');
console.log('Объект:', secureUser);
console.log('Пароль доступен только через символ:', secureUser[_password]);
console.log('secureUser.password:', secureUser.password); // undefined

// ============= ИЗВЕСТНЫЙ СИМВОЛ Symbol.iterator =============

const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let i = 0;
    const data = this.data;
    return {
      next: () => ({
        value: data[i],
        done: i++ >= data.length
      })
    };
  }
};

console.log('\n=== Symbol.iterator ===');
for (const val of iterable) {
  console.log('Значение:', val);
}

// ============= КОПИРОВАНИЕ СИМВОЛОВ =============

const source = {
  regular: 'обычное',
  [idSymbol]: 'символьное'
};

const copy = { ...source }; // поверхностное копирование
console.log('\n=== КОПИРОВАНИЕ ===');
console.log('Обычное свойство:', copy.regular);
console.log('Символьное свойство:', copy[idSymbol]); // undefined

// Правильное копирование
const properCopy = Object.assign({}, source);
console.log('Object.assign копирует символы:', properCopy[idSymbol] === source[idSymbol]);

// ============= КОРОТКО О ГЛАВНОМ =============

console.log('\n=== КЛЮЧЕВЫЕ ОСОБЕННОСТИ ===');
console.log('✅ Уникальность - всегда разные (кроме Symbol.for)');
console.log('✅ Не видны в for...in и Object.keys()');
console.log('✅ Доступны через Object.getOwnPropertySymbols()');
console.log('✅ Идеальны для скрытых свойств и избегания конфликтов');
console.log('✅ Есть встроенные символы (Symbol.iterator и др.)');