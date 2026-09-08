## 🎯 Lesson: ref

### 📝 Описание урока

`ref` — функция Composition API для создания реактивного примитивного значения (число, строка, булево). Оборачивает значение в объект с геттером/сеттером `.value`, что позволяет Vue отслеживать изменения.

### 📦 Изученные концепции

#### Базовое использование

```vue
<script setup>
import { ref } from 'vue';

const count = ref(0);

console.log(count.value); // 0 — доступ через .value
count.value++;            // изменение через .value
</script>
```

#### В шаблоне `.value` не нужен

```vue
<template>
  <!-- Vue автоматически разворачивает ref -->
  <button @click="count++">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
```

#### Ref с объектом — глубокий реактив

```vue
<script setup>
import { ref } from 'vue';

const user = ref({ name: 'Иван', age: 25 });
user.value.age = 26; // вложенные изменения тоже реактивны
</script>
```

#### toRef / toRefs — реактивность из props или reactive

```vue
<script setup>
import { reactive, toRefs, toRef } from 'vue';

const state = reactive({ a: 1, b: 2 });
const { a, b } = toRefs(state); // сохраняют реактивность
const aRef = toRef(state, 'a');
</script>
```

#### readonly — защита от изменения

```vue
<script setup>
import { ref, readonly } from 'vue';

const count = ref(0);
const readOnlyCount = readonly(count);
// readOnlyCount.value = 5 — Ошибка! нельзя менять
</script>
```

### 🔗 Полезные ссылки

- [ref — Vue.js](https://vuejs.org/api/reactivity-core.html#ref)
- [toRefs / toRef](https://vuejs.org/api/reactivity-utilities.html#toref)
- [readonly](https://vuejs.org/api/reactivity-core.html#readonly)

### ✅ Результат

Освоено создание реактивных значений через `ref`, доступ через `.value` в JS и авторазворачивание в шаблоне, работа с объектами, `toRef`/`toRefs` и защита через `readonly`.

---

### 💡 Ключевые моменты

| Концепция          | Описание                                       | Пример                        |
| ------------------ | ---------------------------------------------- | ----------------------------- |
| Примитив           | Реактивное значение, доступ через `.value`     | `const c = ref(0)`            |
| Шаблон             | `.value` автоматически разворачивается         | `{{ count }}`                 |
| Объект             | Вложенные изменения глубоко реактивны          | `obj.value.age++`             |
| toRefs             | Разворачивание объекта в отдельные refs        | `const { a } = toRefs(state)` |
| readonly           | Запрет на изменение значения                   | `readonly(ref)`               |

### 🎯 Когда использовать

- ✅ Для примитивов (числа, строки, булевы) — основное средство
- ✅ Когда нужно передавать реактивное значение между функциями
- ❌ Для сложных объектов с множеством полей лучше подойдёт `reactive`
