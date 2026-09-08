## 🎯 Lesson: emit

### 📝 Описание урока

`emit` — механизм, с помощью которого дочерний компонент сообщает родителю о событии и передаёт данные наверх. Объявляется через `defineEmits` в `<script setup>`. Это обратная связь "снизу вверх".

### 📦 Изученные концепции

#### Объявление и вызов emit

```vue
<!-- Child.vue -->
<script setup>
const emit = defineEmits(['increase', 'change']);

function handleClick() {
  emit('increase', 1); // событие + данные
}
</script>

<template>
  <button @click="handleClick">+1</button>
</template>
```

#### Прослушивание в родителе

```vue
<!-- Parent.vue -->
<template>
  <Child @increase="onIncrease" @change="(v) => console.log(v)" />
</template>

<script setup>
import Child from './Child.vue';

function onIncrease(val) {
  console.log('Плюс', val);
}
</script>
```

#### Объектная форма defineEmits — с валидацией

```vue
<script setup>
const emit = defineEmits({
  increase: (n) => {
    return typeof n === 'number'; // валидация события
  }
});

emit('increase', 'не число'); // предупреждение в консоли
</script>
```

#### emit с несколькими аргументами

```vue
<script setup>
const emit = defineEmits(['save']);

function submit() {
  emit('save', { id: 1, name: 'Иван' }, 'доп. инфо');
}
</script>
```

#### Пример: инкремент через emit вместо изменения props

```vue
<script setup>
const props = defineProps({ count: Number });
const emit = defineEmits(['update:count']);

function inc() {
  emit('update:count', props.count + 1);
}
</script>

<template>
  <button @click="inc">{{ count }}</button>
</template>
```

### 🔗 Полезные ссылки

- [defineEmits — Vue.js](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)
- [Component Events — Guide](https://vuejs.org/guide/components/events.html)

### ✅ Результат

Освоено объявление emit через `defineEmits`, вызов событий с данными, прослушивание в родителе через `@event`, валидация событий и шаблон `update:prop` для доменных событий.

---

### 💡 Ключевые моменты

| Концепция       | Описание                                       | Пример                         |
| --------------- | ---------------------------------------------- | ------------------------------ |
| defineEmits     | Объявление событий компонента                  | `defineEmits(['increase'])`    |
| emit вызов      | `emit('имя', ...данные)`                        | `emit('increase', 1)`          |
| Прослушивание   | Родитель вешает `@increase="fn"`               | `@increase="onIncrease"`       |
| Валидация       | Объектная форма с проверкой                    | `{ increase: (n) => typeof n === 'number' }` |
| update:prop     | Событие для обратной связи с v-model / props   | `emit('update:count', n)`      |

### 🎯 Когда использовать

- ✅ Сообщить родителю о действии пользователя (клик, ввод, сабмит)
- ✅ Передать данные "наверх"
- ✅ Реализация `v-model` через `update:prop`
- ❌ Для обычных данных вниз — используйте `props`
- ❌ Для глобального обмена — лучше `provide/inject` или Pinia
