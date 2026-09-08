## 🎯 Lesson: computed

### 📝 Описание урока

`computed` — функция Composition API для создания вычисляемых реактивных значений. Кэширует результат и пересчитывается только когда меняются его зависимости, в отличие от обычной функции.

### 📦 Изученные концепции

#### Базовое использование (геттер)

```vue
<script setup>
import { ref, computed } from 'vue';

const price = ref(100);
const count = ref(2);

const total = computed(() => price.value * count.value);

console.log(total.value); // 200
price.value = 200;
console.log(total.value); // 400 — пересчитался
</script>
```

#### В шаблоне

```vue
<template>
  <p>Итого: {{ total }}</p>
</template>

<script setup>
import { ref, computed } from 'vue';
const items = ref([1, 2, 3]);
const sum = computed(() =>
  items.value.reduce((acc, n) => acc + n, 0)
);
</script>
```

#### Чтение и запись (геттер + сеттер)

```vue
<script setup>
import { ref, computed } from 'vue';

const firstName = ref('Иван');
const lastName = ref('Петров');

const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (val) => {
    const [first, last] = val.split(' ');
    firstName.value = first;
    lastName.value = last;
  }
});

fullName.value = 'Мария Смирнова'; // вызывает сеттер
console.log(firstName.value); // Мария
console.log(lastName.value);  // Смирнова
</script>
```

#### Изменяемый computed нельзя записывать напрямую

```vue
<script setup>
import { ref, computed } from 'vue';
const a = ref(1);
const double = computed(() => a.value * 2);

// double.value = 10; // Ошибка: computed без сеттера только для чтения
</script>
```

### 🔗 Полезные ссылки

- [computed — Vue.js](https://vuejs.org/api/reactivity-core.html#computed)
- [Вычисляемые свойства](https://vuejs.org/guide/essentials/computed.html)

### ✅ Результат

Освоено создание кэшируемых вычисляемых значений через `computed`, использование в шаблоне, пересчёт при изменении зависимостей и computed с геттером/сеттером.

---

### 💡 Ключевые моменты

| Концепция        | Описание                                  | Пример                      |
| ---------------- | ----------------------------------------- | --------------------------- |
| Кэширование      | Результат пересчитывается только при изменении зависимостей | `computed(() => a.value*2)` |
| Геттер           | Основное использование — только чтение    | `computed(() => ...)`       |
| Сеттер           | Позволяет писать в computed                | `computed({ get, set })`    |
| Зависимости      | Автоматически отслеживаются реактивные источники | `price.value`, `items.value` |

### 🎯 Когда использовать

- ✅ Когда значение выводится из других реактивных данных
- ✅ Дорогие вычисления в шаблоне — чтобы не пересчитывать каждый рендер
- ✅ Фильтрация/сортировка списков
- ❌ Для побочных эффектов (логирование, запросы) — используйте `watch`
