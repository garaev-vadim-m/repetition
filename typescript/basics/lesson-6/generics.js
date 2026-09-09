"use strict";
/**
 * @description дженерики: параметризация типов, обобщённые функции,
 * интерфейсы, классы и constraints.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Базовый generic — функция возвращает то, что приняла
function identity(value) {
    return value;
}
const num = identity(42); // T = number
const str = identity('привет'); // T выводится автоматически (string)
const numberBox = { value: 1 };
const stringBox = { value: 'x' };
const userResponse = {
    status: 'success',
    data: { id: 1 },
};
// Generic с несколькими параметрами
function pair(a, b) {
    return [a, b];
}
const p = pair(1, 'строкa'); // type [number, string]
// Constraint (ограничение) — T должен иметь .length
function longest(a, b) {
    return a.length >= b.length ? a : b;
}
longest([1, 2], [3]); // T выведен как number[]
longest('abc', 'defg'); // T выведен как string
// Generic в классах
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
const popped = stack.pop(); // number | undefined
