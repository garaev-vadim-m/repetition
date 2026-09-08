## 🎯 Lesson: props

### 📝 Описание урока

`props` — входные данные, которые родительский компонент передаёт дочернему. Объявляются через `defineProps` (в `<script setup>`). Props — только для чтения, менять их в дочернем компоненте нельзя.

### 📦 Изученные концепции

#### Объявление через defineProps (объектная форма)

```vue
<!-- Child.vue -->
<script setup>
const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  },
  user: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ count }} — {{ user.name }}</p>
</template>
```

#### Объявление через defineProps (массив строк)

```vue
<script setup>
const props = defineProps(['title', 'count']);
// доступ: props.title, props.count
</script>
```

#### Передача props из родителя

```vue
<!-- Parent.vue -->
<template>
  <Child title="Привет" :count="5" :user="{ name: 'Иван' }" />
</template>

<script setup>
import Child from './Child.vue';
</script>
```

Статические значения — как есть, динамические — через `:`:

```vue
<Child title="Статическая строка" :count="42" :flag="true" />
```

#### Props в шаблоне и в логике

```vue
<script setup>
const props = defineProps({
  count: Number
});

// В JS — через переменную props
const doubled = computed(() => props.count * 2);
</script>

<template>
  <!-- В шаблоне имя используется напрямую -->
  <p>{{ count }} → {{ doubled }}</p>
</template>
```

#### Props нельзя менять

```vue
<script setup>
const props = defineProps({ count: Number });

// props.count++; // Ошибка: props только для чтения

// Правильно: сообщить родителю через emit
const emit = defineEmits(['update']);
function inc() {
  emit('update', props.count + 1);
}
</script>
```

### 🔗 Полезные ссылки

- [defineProps — Vue.js](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)
- [Props — Guide](https://vuejs.org/guide/components/props.html)

### ✅ Результат

Освоено объявление props через `defineProps` в объектной и массивной форме, передача статических и динамических значений, использование в шаблоне и JS, а также правило "props не изменяемы".

---

### 💡 Ключевые моменты

| Концепция       | Описание                                      | Пример                          |
| --------------- | --------------------------------------------- | ------------------------------- |
| defineProps     | Объявление props в `<script setup>`           | `defineProps({ title: String })` |
| Объектная форма | С типами, default, required                   | `{ count: { type: Number, default: 0 } }` |
| Динамические    | Передаются через `:`                          | `:count="5"`                    |
| Только чтение   | Менять props нельзя                           | `props.count = 5` — ошибка       |
| Использование   | В шаблоне по имени, в JS через `props.x`      | `props.count` / `{{ count }}`   |

### 🎯 Когда использовать

- ✅ Конфигурирование дочернего компонента данными сверху
- ✅ Повторное использование компонента с разными данными
- ❌ Для данных, принадлежащих самому компоненту — локальный `ref`/`reactive`
- ❌ Для обратной связи с родителем — используйте `emit` или `v-model`
