## 🎯 Lesson: router

### 📝 Описание урока

Vue Router — официальная библиотека для маршрутизации в приложениях Vue. Позволяет сопоставлять URL с компонентами, передавать параметры маршрута, использовать вложенные маршруты и навигационные хуки.

### 📦 Изученные концепции

#### Настройка базового роутера

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(), // или createWebHashHistory()
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
});

export default router;
```

#### Подключение в приложении

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

#### Компоненты роутера в шаблоне

```vue
<template>
  <!-- Навигация -->
  <nav>
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/about">О нас</RouterLink>
  </nav>

  <!-- Место рендера активного маршрута -->
  <RouterView />
</template>
```

#### Параметры маршрута

```javascript
// router/index.js
import User from '../views/User.vue';

const router = createRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
});
```

```vue
<!-- User.vue -->
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.id); // значение из URL
</script>
```

#### Программная навигация

```vue
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goAbout() {
  router.push('/about');        // добавить в историю
}

function goUser(id) {
  router.push({ name: 'user', params: { id } }); // именованный маршрут
}

function back() {
  router.back();                // назад
}
</script>
```

#### Вложенные маршруты

```javascript
const router = createRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        { path: 'profile', component: UserProfile },
        { path: 'posts', component: UserPosts }
      ]
    }
  ]
});
```

#### Навигационные хуки

```javascript
// глобальный до-хук
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return { name: 'login' }; // редирект
  }
});

// в компоненте
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave(() => {
  if (unsaved) {
    return confirm('Сохранить изменения?');
  }
});
```

### 🔗 Полезные ссылки

- [Vue Router — официальная документация](https://router.vuejs.org/)

### ✅ Результат

Освоена настройка Vue Router: createRouter с историей и маршрутами, подключение через `app.use`, компоненты `RouterLink`/`RouterView`, параметры маршрутов, программная навигация, вложенные маршруты и навигационные хуки.

---

### 💡 Ключевые моменты

| Концепция           | Описание                                     | Пример                         |
| ------------------- | -------------------------------------------- | ------------------------------ |
| Создание            | `createRouter({ history, routes })`          | —                              |
| Шаблон              | `RouterLink` / `RouterView`                  | `<RouterView />`               |
| Параметры           | `route.params`                              | `/user/:id` → `params.id`      |
| Навигация           | `router.push`, `router.back`                 | `router.push('/about')`        |
| Вложенность         | `children` в маршруте                        | `children: [...]`              |
| Хуки                | `beforeEach`, `onBeforeRouteLeave`           | `router.beforeEach(fn)`        |

### 🎯 Когда использовать

- ✅ Многостраничные SPA-приложения
- ✅ Роутинг с параметрами и вложенными страницами
- ✅ Защита маршрутов (auth) через хуки и `meta`
- ❌ Одиночный экран без переходов — роутер избыточен
- ❌ Модальные окна и простые вкладки — можно без роутера
