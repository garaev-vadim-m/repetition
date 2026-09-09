/**
 * @description утверждение типов (type assertion): as, as const,
 * non-null assertion (!), as unknown.
 */

// as — утверждение, что значение имеет конкретный тип
const input = document.getElementById('input') as HTMLInputElement;
// input.value; // тип сужен до HTMLInputElement

// as для преобразования между совместимыми типами
interface Cat {
  meow(): void;
}
interface Dog {
  bark(): void;
}

// const pet = { meow: () => console.log('мяу') } as Cat; // ок

// as const — зафиксировать литералы
const colors = ['red', 'green', 'blue'] as const;
// colors[0] = 'yellow'; // ошибка: readonly tuple

const config = {
  theme: 'dark',
} as const;
// config.theme = 'light'; // ошибка: литерал 'dark'

// Non-null assertion (!) — сказать "здесь точно не null/undefined"
function findUser(id: number): string | null {
  return id > 0 ? 'Иван' : null;
}
// const name = findUser(1)!; // строка, не string | null
const maybeName = findUser(1);
console.log(maybeName?.toUpperCase());

// as unknown — обход несовместимых типов (двойное приведение)
function parseJson(text: string): unknown {
  return JSON.parse(text);
}
// принудительное приведение через unknown
const data = parseJson('{"a":1}') as { a: number };
console.log(data.a); // 1

// Осторожно: as не проверяет совместимость на этапе выполнения
// const n = 'строка' as number; // ошибка: нет перекрытия типов
// const n2 = 'строка' as unknown as number; // так можно, но рискованно

export {};
