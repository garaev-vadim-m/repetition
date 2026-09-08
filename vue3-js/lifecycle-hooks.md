## 🎯 Lesson: lifecycle hooks

### 📝 Описание урока

Lifecycle hooks (хуки жизненного цикла) — функции, которые вызываются на определённых этапах жизни компонента: создание, монтирование, обновление и размонтирование. В Composition API доступны через `on*` функции.

### 📦 Изученные концепции

#### Основные хуки Composition API

```vue
<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

onBeforeMount(() => console.log('До монтирования в DOM'));
onMounted(() => console.log('Компонент в DOM, DOM доступен'));

onBeforeUpdate(() => console.log('Перед перерисовкой'));
onUpdated(() => console.log('После обновления DOM'));

onBeforeUnmount(() => console.log('Перед удалением'));
onUnmounted(() => console.log('Компонент удалён, чистим ресурсы'));
</script>
```

#### Порядок срабатывания

```text
setup → onBeforeMount → onMounted → (изменения) →
onBeforeUpdate → onUpdated → ... → onBeforeUnmount → onUnmounted
```

#### Типичное использование — подписки и их очистка

```vue
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const count = ref(0);
let timer;

onMounted(() => {
  timer = setInterval(() => count.value++, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer); // очищаем, чтобы не осталось утечки
});
</script>
```

#### Дополнительные хуки

```vue
<script setup>
import {
  onActivated,
  onDeactivated,
  onErrorCaptured
} from 'vue';

// Для keep-alive компонентов
onActivated(() => console.log('Компонент активирован'));
onDeactivated(() => console.log('Компонент деактивирован'));

// Перехват ошибок потомков
onErrorCaptured((err) => {
  console.error('Ошибка потомка:', err);
  return false; // не распространять дальше
});
</script>
```

#### Options API вариант (для сравнения)

```javascript
export default {
  data() { return { count: 0 }; },
  mounted() { console.log('смонтирован'); },
  beforeUnmount() { console.log('перед удалением'); }
};
```

### 🔗 Полезные ссылки

- [Lifecycle Hooks — Vue.js Guide](https://vuejs.org/guide/essentials/lifecycle.html)
- [Composition API Lifecycle](https://vuejs.org/api/composition-api-lifecycle.html)

### ✅ Результат

Освоены основные хуки жизненного цикла в Composition API, их порядок, типичные сценарии (подписки и очистка) и дополнительные хуки для keep-alive и перехвата ошибок.

---

### 💡 Ключевые моменты

| Хук              | Момент вызова                    | Типичное использование        |
| ---------------- | -------------------------------- | ----------------------------- |
| onBeforeMount    | Перед добавлением в DOM          | Подготовка                    |
| onMounted        | После монтирования, DOM доступен | Запросы, подписки, сторонние библиотеки |
| onBeforeUpdate   | Перед перерисовкой               | Последняя проверка состояния  |
| onUpdated        | После обновления DOM             | Реакция на изменения DOM      |
| onBeforeUnmount  | Перед удалением                  | Очистка ресурсов              |
| onUnmounted      | После удаления                   | Финальная очистка, unsubscribe |

### 🎯 Когда использовать

- ✅ Загрузка данных / старт подписок — `onMounted`
- ✅ Очистка таймеров и подписок — `onBeforeUnmount` / `onUnmounted`
- ✅ Интеграция сторонних библиотек, работающих с DOM — `onMounted`
- ✅ Оптимизация при обновлениях — `onUpdated`
- ❌ Для вычислений и reactive-логики — раньше, в `setup`/`<script setup>`
