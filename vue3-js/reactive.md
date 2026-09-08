## 🎯 Lesson: reactive

### 📝 Описание урока

`reactive` — функция Composition API для создания глубоко реактивного объекта. В отличие от `ref`, обращение к полям идёт напрямую, без `.value`. Удобен для группировки связанных данных.

### 📦 Изученные концепции

#### Базовое использование

```javascript
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'Иван'
});

state.count++;        // доступ напрямую, без .value
console.log(state.name); // Иван
```

#### Реактивность вложенных объектов

```javascript
import { reactive } from 'vue';

const form = reactive({
  user: {
    profile: {
      email: 'a@b.com'
    }
  }
});

form.user.profile.email = 'new@b.com'; // глубоко реактивно
```

#### В шаблоне с reactive

```vue
<template>
  <button @click="state.count++">{{ state.count }}</button>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({ count: 0 });
</script>
```

#### Массивы в reactive

```javascript
import { reactive } from 'vue';

const list = reactive([1, 2, 3]);
list.push(4);        // реактивно
list[0] = 100;       // реактивно
console.log(list);   // [100, 2, 3, 4]
```

#### Разворачивание ref внутри reactive

```javascript
import { ref, reactive } from 'vue';

const count = ref(0);
const state = reactive({ count });

state.count++;          // автоматически разворачивается ref
console.log(count.value); // 1
```

### 🔗 Полезные ссылки

- [reactive — Vue.js](https://vuejs.org/api/reactivity-core.html#reactive)
- [Разница ref и reactive](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)

### ✅ Результат

Освоено создание глубоко реактивных объектов через `reactive`, прямой доступ к полям, вложенная реактивность, работа с массивами и авторазворачивание вложенных ref.

---

### 💡 Ключевые моменты

| Концепция        | Описание                                  | Пример                          |
| ---------------- | ----------------------------------------- | ------------------------------- |
| Доступ           | Поля читаются/пишутся напрямую, без `.value` | `state.count++`              |
| Глубина          | Вложенные объекты глубоко реактивны       | `form.user.profile.email = ...` |
| Массивы          | Изменения элементов реактивны             | `list.push(x)`, `list[i] = v`   |
| Вложенные ref    | Автоматически разворачиваются              | `reactive({ count: ref(0) })`   |

### 🎯 Когда использовать

- ✅ Для "куска состояния" с множеством связанных полей (форма, настройки)
- ✅ Для объектов и массивов, где `ref(...).value` мешает читаемости
- ❌ Для одиночных примитивов — используйте `ref`
- ⚠️ `reactive` не применяется к примитивам
