/**
 * @description объектные типы: описание формы объекта, опциональные и readonly поля,
 * вложенные объекты и массивы.
 */

// Описание объектного типа через type
type User = {
  name: string;
  age: number;
  // опциональное поле — может отсутствовать
  email?: string;
  // readonly — нельзя изменить после создания
  readonly id: number;
};

const user: User = {
  name: 'Иван',
  age: 25,
  id: 1,
  // email — необязательный, можно не указывать
};
// user.id = 2; // ошибка: readonly

// Вложенные объекты и массивы в типе
type Profile = {
  user: User;
  tags: string[];
  scores: number[];
  address: {
    city: string;
    street?: string;
  };
};

const profile: Profile = {
  user,
  tags: ['frontend', 'vue'],
  scores: [10, 20, 30],
  address: { city: 'Москва' },
};

// Объект с индексной сигнатурой — любые ключи
type Dictionary = {
  [key: string]: number;
};
const dict: Dictionary = { a: 1, b: 2 };

// Тип функции внутри объекта
type Handler = {
  (message: string): void;
  on: boolean;
};
const handler: Handler = Object.assign(
  (message: string) => console.log(message),
  { on: true }
);

export {};
