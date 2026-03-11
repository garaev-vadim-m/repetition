<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from '@/shared/ui/Button.vue';
import MainLayout from '@/widgets/layout/MainLayout.vue';
import AnimateBackground from '@/shared/ui/AnimateBackground.vue';
import Card from '@/entities/card/Card.vue';
import Drawer from '@/shared/ui/Drawer.vue';
import { onUnmounted, ref } from 'vue';

const projects = [
  {
    id: 1,
    title: 'Проект vuejs + ts + vite',
    technology: [
      {
        id: 1,
        name: 'vuejs',
      },
      {
        id: 2,
        name: 'vue router',
      },
      {
        id: 3,
        name: 'typescript',
      },
      {
        id: 4,
        name: 'pinia',
      },
      {
        id: 5,
        name: 'vite',
      },
      {
        id: 6,
        name: 'axios',
      },
    ],
    decstiprion: 'Тут будет описание',
  },
];

const drawer = ref(false);

function onOpenDrawer() {
  drawer.value = !drawer.value;
}
</script>

<template>
  <MainLayout>
    <template #header>
      <div :class="classes.root">
        <nav :class="classes.navigation">
          <RouterLink :class="classes.navigation_link" to="/">Главная</RouterLink>
          <a :class="classes.navigation_link" target="_blank" href="/">(icon) GitHub проекта</a>
        </nav>
        <Button>
          <RouterLink :class="classes.navigation_link" to="/auth">Вход</RouterLink>
        </Button>
      </div>
    </template>
    <template #main>
      <AnimateBackground>
        <div :class="classes.main">
          <div :class="classes.title">
            <h1>Ну, просто пет проект</h1>
            <p>Есть авторизация, аутификация и регистрация</p>
            <p>Ниже будут представлены ссылки на репозиторий с разными папками про проекту</p>
          </div>
          <!-- Массив -->
          <div :class="classes.projects">
            <Card v-for="project of projects">
              <template #title>{{ project.title }}</template>
              <template #body>
                <p>Технологии:</p>
                <ul>
                  <li v-for="tech of project.technology">{{ tech.name }}</li>
                </ul>
                <div :class="classes.project_action">
                  <RouterLink to="/">Link github</RouterLink>
                  <Button @click="onOpenDrawer">Драйвер детализации</Button>
                </div>
                <Drawer v-model="drawer" />
              </template>
            </Card>
          </div>
        </div>
      </AnimateBackground>
    </template>
  </MainLayout>
</template>

<style module="classes" lang="scss">
.root {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.navigation {
  display: flex;
  align-items: center;
  gap: clamp(8px, 3vw, 16px);
}

.navigation_link {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  opacity: 100%;
  transition: all 0.3s ease;
  &:hover {
    opacity: 70%;
  }
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 53px);
  padding: 16px;
}

.title {
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  gap: 16px;
  flex-wrap: wrap;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgb(105, 105, 105);
  border-radius: 5px;
  flex: 1;
  padding: 16px;
  &_action {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: end;
  }
}
</style>
