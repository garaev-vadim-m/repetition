"use strict";
/**
 * @description классы в TypeScript: модификаторы доступа, readonly,
 * параметры-свойства конструктора, static и наследование.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Класс с модификаторами доступа
class Animal {
    name; // доступен везде (по умолчанию)
    age; // доступен в классе и наследниках
    secret; // доступен только внутри класса
    constructor(name, age, secret) {
        this.name = name;
        this.age = age;
        this.secret = secret;
    }
    speak() {
        return `${this.name} говорит`;
    }
}
// readonly — свойство нельзя менять после инициализации
class Config {
    version = '1.0';
}
// Параметры-свойства конструктора (parameter properties)
class Point {
    x;
    y;
    constructor(x, // автоматически создаёт this.x
    y) {
        this.x = x;
        this.y = y;
    }
    getY() {
        return this.y;
    }
}
// Наследование и переопределение
class Dog extends Animal {
    constructor(name, age) {
        super(name, age, 'секрет');
    }
    speak() {
        return `${this.name} лает`;
    }
    // protected age доступен здесь
    getAge() {
        return this.age;
    }
}
// Статические члены — доступны на самом классе
class MathUtils {
    static PI = 3.14159;
    static square(n) {
        return n * n;
    }
}
MathUtils.PI;
MathUtils.square(4);
// Абстрактный класс — нельзя инстанцировать
class Shape {
    describe() {
        return `Площадь: ${this.area()}`;
    }
}
class Square extends Shape {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
}
