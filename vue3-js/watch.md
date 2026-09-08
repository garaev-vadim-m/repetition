## 🎯 Lesson: watch

### 📝 Описание урока

`watch` — функция Composition API для отслеживания изменений реактивных источников и выполнения побочных эффектов (запросы, логирование, синхронизация). В отличие от `computed`, выполняется при изменении, а не пересчитывает значение.

### 📦 Изученные концепции

#### Базовый watch по ref

```vue
<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newVal, oldVal) => {
  console.log(`Было: ${oldVal}, стало: ${newVal}`);
});

count.value++; // Было: 0, стало: 1
</script>
```

#### Геттер-функция для реактивного свойства

```vue
<script setup>
import { reactive, watch } from 'vue';

const state = reactive({ count: 0 });

watch(
  () => state.count,
  (newVal, oldVal) => console.log(newVal, oldVal)
);

state.count = 10; // 10, 0
</script>
```

#### Несколько источников (массив)

```vue
<script setup>
import { ref, watch } from 'vue';

const a = ref(1);
const b = ref(2);

watch([a, b], ([newA, newB], [oldA, oldB]) => {
  console.log(newA, newB);
});

a.value = 5; // 5, 2
</script>
```

#### Опции: immediate и deep

```vue
<script setup>
import { ref, reactive, watch } from 'vue';

const count = ref(0);
// immediate: запускается сразу с текущим значением
watch(count, (v) => console.log(v), { immediate: true }); // 0 сразу

const obj = reactive({ user: { name: 'Иван' } });
// deep: отслеживает вложенные изменения
watch(
  () => obj.user,
  (v) => console.log('Изменился user', v),
  { deep: true }
);
</script>
```

#### Остановка watch (watchHandle)

```vue
<script setup>
import { ref, watch } from 'vue';

const count = ref(0);
const stop = watch(count, (v) => console.log(v));

stop(); // больше не отслеживает
count.value++; // ничего не выведет
</script>
```

### 🔗 Полезные ссылки

- [watch — Vue.js](https://vuejs.org/api/reactivity-core.html#watch)
- [Watchers в Vue](https://vuejs.org/guide/essentials/watchers.html)

### ✅ Результат

Освоено отслеживание изменений через `watch` для refs, реактивных свойств и нескольких источников, использование опций `immediate`, `deep` и остановка watcher через возвращаемую функцию.

---

### 💡 Ключевые моменты

| Концепция      | Описание                                  | Пример                          |
| -------------- | ----------------------------------------- | ------------------------------- |
| Источник       | ref, reactive-свойство или массив         | `watch(ref, cb)`                |
| Колбэк         | Получает `(newVal, oldVal)`               | `(n, o) => ...`                 |
| immediate      | Выполнить сразу, не дожидаясь изменения   | `{ immediate: true }`           |
| deep           | Отслеживать вложенные изменения           | `{ deep: true }`                |
| Остановка      | Вызов возвращаемой функции останавливает  | `const stop = watch(...); stop()` |

### 🎯 Когда использовать

- ✅ Побочные эффекты при изменении данных (запросы, логирование)
- ✅ Сохранение/синхронизация данных
- ✅ Реакция на изменение одного конкретного источника
- ❌ Для вычисляемых значений — используйте `computed`
- ❌ Когда нужна авто-остановка при размонтировании — рассмотрите `watchEffect`
