// Map Set

/**
 * new Map() – создаёт коллекцию.
 * map.set(key, value) – записывает по ключу key значение value.
 * map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
 * map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
 * map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
 * map.clear() – очищает коллекцию от всех элементов.
 * map.size – возвращает текущее количество элементов.
 */

const map1 = new Map([['a', 'b']]);
const map2 = new Map([['set', [{}]]]);

//получим элементы
console.log('Получим элементы - map1', map1.get('a'));
console.log('Получим элементы - map2', map2.get('set'));

//запишем элементы
map1.set('1', 'one');
console.log('Получим элементы после записи map1 - ', map1.get('1'));

//найдем ключ
console.log('найдем ключ -', map2.has('set'));

//Удалим ключ и значение. Потом проверим

map1.delete('1');
console.log('Ключ после удаления (найдем с помощью has) - ', map1.has('1'));

//запишем данные
map1.set('1', '2').set('2', '3').set('3', '4');
//посмотрим количество
console.log(map1.size);
//Можем еще значения посмотреть
console.log(map1.values());
//Пробежаться по элементам можно с помощью for of
for (const a of map1) {
  console.log(a);
}
//да и очистим все
map1.clear();
console.log(map1);
//End map

/**
 * new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
 * set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
 * set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
 * set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
 * set.clear() – удаляет все имеющиеся значения.
 * set.size – возвращает количество элементов в множестве.
 */

let set1 = new Set();

let john = { id: 1, name: 'John' };
let john1 = { id: 2, name: 'John' };
let pete = { id: 3, name: 'Pete' };
let mary = { id: 1, name: 'Mary' };

set1
  .add(john)
  .add(john1)
  .add(john1) //Дубликат
  .add(pete)
  .add(mary)
  .add(john)
  .add(mary);

for (let user of set1) {
  //не добавил дубликаты
  console.log('Товарищи', user);
}

//К сожалению если мы хотим уникальные объекты, то нужно немного повозиться
let uniq = [...set1]
  .map(({ id }) => id)
  .filter((value, index, values) => values.indexOf(value) === index)
  .map((value) => [...set1].find(({ id }) => id === value));

//Используем new Set
let uniq2 = [...new Set([...set1].map((value) => value.id))].map((value) => [...set1].find(({ id }) => id === value));

console.log(uniq, uniq2);

//Еще есть WeakMap.В своей практике никогда не использовал, да и применения не видел в vue. В нативном js это может иметь смысл (возможно)

/**
 * В WeakMap присутствуют только следующие методы:
 *
 * weakMap.get(key)
 * weakMap.set(key, value)
 * weakMap.delete(key)
 * weakMap.has(key)
 */

let weakMap = new WeakMap();

weakMap.set(john, 'data');

console.log(john, weakMap.get(john));

// нельзя использовать строку в качестве ключа
//weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект

/**
 * Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
 * Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
 * Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.
 */

let weakSet = new WeakSet();

weakSet.add([...set1]);
