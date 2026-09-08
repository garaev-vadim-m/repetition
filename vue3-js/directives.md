## 🎯 Lesson: directives

### 📝 Описание урока

Директивы — специальные атрибуты с префиксом `v-`, добавляющие декларативное поведение к элементам. Vue поставляется со встроенными директивами (v-if, v-for, v-show, v-bind, v-on, v-model) и позволяет создавать свои через `vDirective`.

### 📦 Изученные концепции

#### Встроенные директивы

```vue
<template>
  <!-- v-if / v-else / v-show — условный рендер -->
  <p v-if="visible">Показано</p>
  <p v-else>Скрыто</p>
  <p v-show="visible">Всегда в DOM, скрыт через display</p>

  <!-- v-for — циклы -->
  <li v-for="(item, i) in items" :key="item.id">{{ i }}: {{ item }}</li>

  <!-- v-bind (:) — привязка атрибутов -->
  <img :src="image" :alt="alt" />

  <!-- v-on (@) — события -->
  <button @click="handleClick">Кнопка</button>

  <!-- v-html / v-text — рендер контента -->
  <div v-html="rawHtml"></div>
</template>
```

#### Создание кастомной директивы (vFocus)

```vue
<!-- main.js -->
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.directive('focus', {
  mounted(el) {
    el.focus(); // автофокус при монтировании
  }
});

app.mount('#app');
```

#### Локальная кастомная директива в компоненте

```vue
<!-- <script setup> -->
<script setup>
// имя директивы vHighlight
const vHighlight = {
  mounted(el, binding) {
    el.style.backgroundColor = binding.value; // v-highlight="'yellow'"
  },
  updated(el, binding) {
    el.style.backgroundColor = binding.value;
  }
};
</script>

<template>
  <p v-highlight="color">Подсвеченный текст</p>
</template>
```

#### Хуки директивы

```javascript
const vMyDir = {
  created(el, binding, vnode) {},
  beforeMount(el, binding, vnode) {},
  mounted(el, binding, vnode) {},
  beforeUpdate(el, binding, vnode) {},
  updated(el, binding, vnode) {},
  beforeUnmount(el, binding, vnode) {},
  unmounted(el, binding, vnode) {}
};
```

#### Доступ к binding

```vue
<template>
  <!-- v-направ.Аргумент.модификатор="значение" -->
  <p v-color:background.mobile="'red'">Текст</p>
</template>

<script setup>
const vColor = {
  mounted(el, binding) {
    console.log(binding.value);       // 'red'
    console.log(binding.arg);         // 'background'
    console.log(binding.modifiers);   // { mobile: true }
  }
};
</script>
```

### 🔗 Полезные ссылки

- [Custom Directives — Vue.js Guide](https://vuejs.org/guide/reusability/custom-directives.html)
- [Built-in Directives](https://vuejs.org/api/built-in-directives.html)

### ✅ Результат

Освоены встроенные директивы Vue, создание глобальных и локальных кастомных директив, их хуки жизненного цикла и доступ к `binding`.

---

### 💡 Ключевые моменты

| Концепция       | Описание                                  | Пример                   |
| --------------- | ----------------------------------------- | ------------------------ |
| Встроенные      | v-if, v-for, v-show, v-bind, v-on, v-model | `v-if="visible"`         |
| Глобальная      | `app.directive('name', obj)`              | `v-focus`                |
| Локальная       | `vDirective` в `<script setup>`           | `const vHighlight = {...}` |
| Хуки            | mounted, updated, unmounted и др.         | `mounted(el, binding)`   |
| binding         | value, arg, modifiers, instance           | `binding.value`          |

### 🎯 Когда использовать

- ✅ Повторяющаяся логика работы с DOM-элементами (фокус, позиционирование)
- ✅ Интеграция со сторонними библиотеками, работающими с DOM
- ✅ Манипуляции атрибутами/стилями элементов
- ❌ Для реактивных данных и вычислений — используйте computed/ref
- ⚠️ Не злоупотребляйте: часто лучше обычный компонент или composable
