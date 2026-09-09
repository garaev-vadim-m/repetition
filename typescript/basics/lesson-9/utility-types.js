"use strict";
/**
 * @description встроенные утилитарные типы: Partial, Required, Readonly,
 * Pick, Omit, Record, ReturnType и другие.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const partial = { name: 'Иван' };
const ro = { id: 1, name: 'И', email: 'e', age: 2 };
const nameOnly = { id: 1, name: 'Иван' };
const u = { id: 1, name: 'Иван', age: 25 };
const perms = { admin: true, user: false, guest: false };
const params = [1, 'x'];
