## 🎯 Lesson: v-model

### 📝 Описание урока

`v-model` — директива для двусторонней привязки данных. В элементах форм связывает значение с реактивным состоянием. В компонентах реализуется через props `modelValue` и событие `update:modelValue`.

### 📦 Изученные концепции

#### v-model на инпутах

```vue
<script setup>
import { ref } from 'vue';

const name = ref('');
const checked = ref(false);
const message = ref('');
</script>

<template>
  <input v-model="name" />
  <input type="checkbox" v-model="checked" />
  <textarea v-model="message"></textarea>
</template>
```

#### v-model на компоненте (распаковка)

`v-model="search"` эквивалентно `:model-value="search" @update:model-value="search = $event"`.

```vue
<!-- Component.vue -->
<script setup>
const props = defineProps({ modelValue: String });
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<!-- Parent.vue -->
<template>
  <Component v-model="search" />
</template>
```

#### Модификаторы: .number, .trim, .lazy

```vue
<template>
  <input v-model.number="age" />   <!-- преобразует в число -->
  <input v-model.trim="name" />    <!-- убирает пробелы по краям -->
  <input v-model.lazy="text" />    <!-- обновляет по blur, а не на каждый ввод -->
</template>
```

#### Кастомный модификатор

```vue
<!-- Component.vue -->
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
});
const emit = defineEmits(['update:modelValue']);

function onInput(e) {
  let value = e.target.value;
  if (props.modelModifiers.capitalize) {
    value = value.toUpperCase();
  }
  emit('update:modelValue', value);
}
</script>

<!-- Parent.vue -->
<template>
  <Component v-model.capitalize="name" />
</template>
```

#### Множественные v-model с именами

```vue
<!-- Component.vue -->
<script setup>
const props = defineProps({ firstName: String, lastName: String });
const emit = defineEmits(['update:firstName', 'update:lastName']);
</script>

<template>
  <input :value="props.firstName" @input="emit('update:firstName', $event.target.value)" />
  <input :value="props.lastName" @input="emit('update:lastName', $event.target.value)" />
</template>

<!-- Parent.vue -->
<template>
  <Component v-model:firstName="first" v-model:lastName="last" />
</template>
```

### 🔗 Полезные ссылки

- [v-model — Vue.js Guide](https://vuejs.org/guide/components/v-model.html)
- [Form Input Bindings](https://vuejs.org/guide/essentials/forms.html)

### ✅ Результат

Освоена двусторонняя привязка через `v-model` на формах и компонентах, распаковка в `modelValue` + `update:modelValue`, модификаторы и множественные v-model с именами.

---

### 💡 Ключевые моменты

| Концепция            | Описание                                          | Пример                            |
| -------------------- | ------------------------------------------------- | --------------------------------- |
| Привязка             | Двусторонняя связь значения                       | `v-model="name"`                  |
| Распаковка           | `:model-value` + `@update:model-value`            | `v-model="search"`                |
| Модификаторы         | `.number`, `.trim`, `.lazy`                       | `v-model.trim="name"`             |
| Кастомный модификатор| Доступен через `modelModifiers`                  | `v-model.capitalize="name"`       |
| Именованные          | Несколько v-model через `v-model:имя`            | `v-model:firstName="first"`       |

### 🎯 Когда использовать

- ✅ Формы и пользовательский ввод
- ✅ Переиспользуемые поля ввода / компоненты-обёртки форм
- ✅ Связка родитель↔потомок для данных ввода
- ❌ Для событий-действий используйте обычный `emit`
- ❌ Для многослойного глобального состояния — Pinia
