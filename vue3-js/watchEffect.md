## 🎯 Lesson: watchEffect

### 📝 Описание урока

`watchEffect` — функция Composition API, которая немедленно запускает переданный эффект и автоматически отслеживает все реактивные зависимости, использованные внутри. Перезапускается при изменении любой из них.

### 📦 Изученные концепции

#### Базовое использование

```vue
<script setup>
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect(() => {
  console.log('count =', count.value);
});
// Выполнится сразу: count = 0

count.value++; // count = 1 (автоматически перезапустился)
count.value++; // count = 2
</script>
```

#### В отличие от watch — не нужно указывать источники

```vue
<script setup>
import { ref, watchEffect } from 'vue';

const a = ref(1);
const b = ref(2);

// watch потребовал бы явного списка [a, b]
watchEffect(() => {
  console.log('Сумма:', a.value + b.value);
});
a.value = 5; // Сумма: 7
</script>
```

#### Автоматическая остановка при размонтировании

`watchEffect`, созданный в `setup` (или `<script setup>`), автоматически останавливается при размонтировании компонента.

```vue
<script setup>
import { ref, watchEffect } from 'vue';

const timer = ref(0);

// Остановится сам, когда компонент будет удалён
watchEffect(() => {
  document.title = `Секунд: ${timer.value}`;
});
</script>
```

#### Ручная остановка через возвращаемую функцию

```vue
<script setup>
import { ref, watchEffect } from 'vue';

const count = ref(0);
const stop = watchEffect(() => {
  console.log(count.value);
});

stop(); // эффект больше не запускается
count.value++; // ничего не выведет
</script>
```

### 🔗 Полезные ссылки

- [watchEffect — Vue.js](https://vuejs.org/api/reactivity-core.html#watcheffect)
- [watch vs watchEffect](https://vuejs.org/guide/essentials/watchers.html)

### ✅ Результат

Освоено автоматическое отслеживание реактивных зависимостей через `watchEffect`, немедленный запуск, автоостановка при размонтировании и ручная остановка через возвращаемую функцию.

---

### 💡 Ключевые моменты

| Концепция            | Описание                                        | Пример                    |
| -------------------- | ----------------------------------------------- | ------------------------- |
| Авто-отслеживание    | Все зависимости внутри эффекта отслеживаются сами | `watchEffect(() => a.value + b.value)` |
| Немедленный запуск   | Эффект выполняется сразу                        | —                         |
| Авто-остановка       | Останавливается при размонтировании компонента  | —                         |
| Ручная остановка     | Возвращаемая функция `stop()`                   | `const stop = watchEffect(...)` |

### 🎯 Когда использовать

- ✅ Нужно собрать несколько зависимых значений в один эффект
- ✅ "Следить за всем, что используется внутри"
- ✅ Синхронизация, side-эффекты, которые не зависят от одного явного источника
- ❌ Когда нужно реагировать на конкретный источник с `oldVal` — используйте `watch`
- ❌ Когда нужен контроль через `immediate`/`deep` — это опции `watch`
