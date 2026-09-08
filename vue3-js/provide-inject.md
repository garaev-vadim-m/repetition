## 🎯 Lesson: provide / inject

### 📝 Описание урока

`provide` / `inject` — механизм передачи данных между компонентами дерева без явной передачи через props. Позволяет передать значение от предка всем потомкам, которые запросят его через `inject`.

### 📦 Изученные концепции

#### Базовое provide

```vue
<!-- Parent.vue -->
<script setup>
import { provide, ref } from 'vue';

const theme = ref('dark');
// ключ — строка или Symbol
provide('theme', theme);
provide('updateTheme', (val) => { theme.value = val; });
</script>
```

#### Базовое inject в потомке

```vue
<!-- Child.vue (любой глубины вложенности) -->
<script setup>
import { inject } from 'vue';

const theme = inject('theme');       // получаем значение
const updateTheme = inject('updateTheme');

updateTheme('light'); // изменяем через функцию-сеттер
</script>
```

#### inject с значением по умолчанию

```vue
<script setup>
import { inject } from 'vue';

// если ключ не найден — вернётся дефолт
const theme = inject('theme', 'light');
</script>
```

#### Ключ через Symbol — защита от коллизий

```javascript
// keys.js
export const ThemeKey = Symbol('theme');

// Parent.vue
import { provide } from 'vue';
import { ThemeKey } from './keys';
provide(ThemeKey, 'dark');

// Child.vue
import { inject } from 'vue';
import { ThemeKey } from './keys';
const theme = inject(ThemeKey, 'light');
```

#### Provide с объектом / не-реактивными данными

```vue
<script setup>
import { provide } from 'vue';

// Не-реактивные константы — просто передаются
provide('config', { apiUrl: '/api', version: '1.0' });
</script>
```

### 🔗 Полезные ссылки

- [provide / inject — Vue.js Guide](https://vuejs.org/guide/components/provide-inject.html)

### ✅ Результат

Освоена передача данных через `provide`/`inject`: преодоление глубокой вложенности без props-проброски, значения по умолчанию, ключи через Symbol и реактивные данные с функциями-сеттерами.

---

### 💡 Ключевые моменты

| Концепция            | Описание                                     | Пример                          |
| -------------------- | -------------------------------------------- | ------------------------------- |
| provide              | Передача значения потомкам                   | `provide('key', value)`         |
| inject               | Получение значения от предка                 | `const v = inject('key')`       |
| По умолчанию         | Если ключ не найден                          | `inject('key', 'default')`      |
| Symbol-ключ          | Уникальный ключ, избегает коллизий           | `provide(Symbol('theme'), v)`   |
| Реактивность         | Ref передаётся реактивным, но не "изолирован"| `provide('theme', ref('dark'))` |

### 🎯 Когда использовать

- ✅ Глобальные настройки/темы для поддерева компонентов
- ✅ Данные для глубоко вложенных потомков, где props-проброска утомительна
- ✅ DI-подобные сценарии внутри дерева компонентов
- ❌ Для однократной передачи на один уровень — используйте props
- ❌ Для глобального состояния всего приложения — лучше Pinia/словарь
- ⚠️ inject-значения не реактивны по умолчанию, если не передать ref/fn
