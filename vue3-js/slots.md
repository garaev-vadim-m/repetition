## 🎯 Lesson: slots

### 📝 Описание урока

Slots (слоты) — механизм для передачи контента из родительского компонента в дочерний. Позволяют создавать переиспользуемые компоненты-обёртки, где родитель решает, что рендерить внутри.

### 📦 Изученные концепции

#### Базовый слот

```vue
<!-- Card.vue -->
<template>
  <div class="card">
    <h2>Заголовок карточки</h2>
    <slot></slot>   <!-- сюда попадёт контент родителя -->
  </div>
</template>

<!-- Parent.vue -->
<template>
  <Card>
    <p>Это контент внутри слота</p>
  </Card>
</template>
```

#### Слот с текстом по умолчанию

```vue
<!-- Button.vue -->
<template>
  <button>
    <!-- Если родитель не передал контент, покажется "Нажми" -->
    <slot>Нажми</slot>
  </button>
</template>
```

#### Именованные слоты

```vue
<!-- Layout.vue -->
<template>
  <header><slot name="header">Шапка по умолчанию</slot></header>
  <main><slot>Основной контент</slot></main>
  <footer><slot name="footer"></slot></footer>
</template>

<!-- Parent.vue -->
<template>
  <Layout>
    <template #header><h1>Моя шапка</h1></template>

    <p>Контент для слота по умолчанию</p>

    <template #footer><small>Подвал</small></template>
  </Layout>
</template>
```

#### Scoped slots — доступ к данным дочернего компонента

```vue
<!-- List.vue -->
<script setup>
const props = defineProps({ items: Array });
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot :item="item" :index="item.id">{{ item.name }}</slot>
    </li>
  </ul>
</template>

<!-- Parent.vue -->
<template>
  <List :items="items">
    <template #default="{ item, index }">
      <strong>{{ index }}</strong> — {{ item.name }}
    </template>
  </List>
</template>
```

#### Сокращённая форма scoped slots

```vue
<template>
  <!-- :item и :index — данные, пробрасываемые в слот -->
  <slot :item="item" :index="index">{{ item.name }}</slot>
</template>
```

### 🔗 Полезные ссылки

- [Slots — Vue.js Guide](https://vuejs.org/guide/components/slots.html)
- [Named Slots](https://vuejs.org/guide/components/slots.html#named-slots)
- [Scoped Slots](https://vuejs.org/guide/components/slots.html#scoped-slots)

### ✅ Результат

Освоены базовые слоты, слоты по умолчанию, именованные слоты через `#name` и scoped slots с пробрасыванием данных через props слота.

---

### 💡 Ключевые моменты

| Концепция       | Описание                                     | Пример                         |
| --------------- | -------------------------------------------- | ------------------------------ |
| Базовый слот    | `<slot>` принимает контент родителя          | `<slot></slot>`                |
| По умолчанию    | Контент внутри `<slot>` — fallback            | `<slot>Текст</slot>`           |
| Именованные     | `slot name="header"` + `<template #header>`  | `<template #header>...</template>` |
| Scoped slots    | Проброс данных дочернего в слот через `:prop` | `<slot :item="item">`          |

### 🎯 Когда использовать

- ✅ Компоненты-обёртки (Card, Layout, Button)
- ✅ Настройка рендеринга контента родителем
- ✅ Списки с кастомным рендером элементов (scoped slots)
- ❌ Для передачи данных вниз — используйте `props`
- ❌ Для чисто логических компонентов без вёрстки
