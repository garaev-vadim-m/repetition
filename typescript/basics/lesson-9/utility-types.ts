/**
 * @description встроенные утилитарные типы: Partial, Required, Readonly,
 * Pick, Omit, Record, ReturnType и другие.
 */

// Исходный тип
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial — все поля становятся опциональными
type UserPartial = Partial<User>;
const partial: UserPartial = { name: 'Иван' };

// Required — все поля обязательны
type UserRequired = Required<UserPartial>;
// const req: UserRequired = {}; // ошибка: все поля нужны

// Readonly — все поля только для чтения
type UserReadonly = Readonly<User>;
const ro: UserReadonly = { id: 1, name: 'И', email: 'e', age: 2 };
// ro.name = 'x'; // ошибка: readonly

// Pick — выбрать подмножество полей
type UserName = Pick<User, 'id' | 'name'>;
const nameOnly: UserName = { id: 1, name: 'Иван' };

// Omit — исключить поля
type UserWithoutEmail = Omit<User, 'email'>;
const u: UserWithoutEmail = { id: 1, name: 'Иван', age: 25 };

// Record — объект с ключами одного типа и значениями другого
type Role = 'admin' | 'user' | 'guest';
type Permissions = Record<Role, boolean>;
const perms: Permissions = { admin: true, user: false, guest: false };

// ReturnType — тип возвращаемого значения функции
type Fn = () => { data: string };
type FnReturn = ReturnType<Fn>; // { data: string }

// Parameters — типы параметров функции
type Params = Parameters<(a: number, b: string) => void>; // [number, string]
const params: Params = [1, 'x'];

// Extract / Exclude — фильтрация union
type Animals = 'cat' | 'dog' | 'bird';
type Domestic = 'cat' | 'dog';
type OnlyWild = Exclude<Animals, Domestic>; // 'bird'
type Pet = Extract<Animals, 'dog' | 'bird'>; // 'dog' | 'bird'

export {};
