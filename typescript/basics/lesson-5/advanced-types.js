"use strict";
/**
 * @description продвинутые типы: union (|), intersection (&), литеральные типы.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let res = 'успех';
res = 42;
const ok = { status: 'success', data: 'данные' };
const fail = { status: 'error', error: 'ошибка' };
const entity = {
    id: 1,
    createdAt: new Date(),
};
let dir = 'up';
const roll = 4;
// as const — зафиксировать значения через const-объект
const config = {
    theme: 'dark',
    lang: 'ru',
};
// config.theme = 'light'; // ошибка: теперь литерал
console.log(config.theme); // 'dark' — тип стал литеральным
