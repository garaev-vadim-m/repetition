"use strict";
/**
 * @description интерфейсы: описание структуры объектов, расширение, implements,
 * и отличие интерфейса от type.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const user = { name: 'Иван', age: 25 };
const admin = { name: 'Пётр', age: 30, role: 'admin' };
const greet = (name) => `Привет, ${name}!`;
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const win = { version: '1.0', name: 'win' };
