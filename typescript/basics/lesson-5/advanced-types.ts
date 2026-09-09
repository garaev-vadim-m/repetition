/**
 * @description продвинутые типы: union (|), intersection (&), литеральные типы.
 */

// Union — значение одного из нескольких типов
type Result = string | number;
let res: Result = 'успех';
res = 42;
// res = true; // ошибка: boolean не входит в union

// Union с объектами — vsco object можно с любым из вариантов
type Success = { status: 'success'; data: string };
type Error = { status: 'error'; error: string };
type ApiResponse = Success | Error;

const ok: ApiResponse = { status: 'success', data: 'данные' };
const fail: ApiResponse = { status: 'error', error: 'ошибка' };

// Intersection — пересечение: объект со всеми полями обоих типов
type Base = { id: number };
type Timestamp = { createdAt: Date };
type Entity = Base & Timestamp;

const entity: Entity = {
  id: 1,
  createdAt: new Date(),
};

// Литеральные типы — конкретное значение
type Direction = 'up' | 'down' | 'left' | 'right';
let dir: Direction = 'up';
// dir = 'diagonal'; // ошибка: не входит в литералы

// Литеральные числа
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const roll: DiceRoll = 4;

// as const — зафиксировать значения через const-объект
const config = {
  theme: 'dark',
  lang: 'ru',
} as const;

// config.theme = 'light'; // ошибка: теперь литерал
console.log(config.theme); // 'dark' — тип стал литеральным

export {};
