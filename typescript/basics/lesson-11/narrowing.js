"use strict";
/**
 * @description сужение типов (narrowing): typeof, in, instanceof,
 * discriminated unions и функции-гарды.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// typeof — сужение примитивов
function print(input) {
    if (typeof input === 'string') {
        // здесь input: string
        console.log(input.toUpperCase());
    }
    else {
        // здесь input: number
        console.log(input.toFixed(2));
    }
}
function move(animal) {
    if ('fly' in animal) {
        animal.fly();
    }
    else {
        animal.swim();
    }
}
// instanceof — проверка класса
class Cat {
    meow() { }
}
class Dog {
    bark() { }
}
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
function area(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
    }
}
// Type guard — пользовательская функция-гард
function isCircle(shape) {
    return shape.kind === 'circle';
}
function describe(shape) {
    if (isCircle(shape)) {
        // shape сужен до Circle
        return `Circle r=${shape.radius}`;
    }
    return `Square s=${shape.side}`;
}
// Фильтрация null/undefined с narrowing
const list = ['a', null, 'b'];
const clean = list.filter((x) => x !== null);
