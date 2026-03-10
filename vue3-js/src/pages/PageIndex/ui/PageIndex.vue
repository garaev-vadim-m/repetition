<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/shared/ui/Button.vue';
import MainLayout from '@/widgets/layout/MainLayout.vue';
import AnimateBackground from '@/shared/ui/AnimateBackground.vue';
</script>

<template>
  <MainLayout>
    <template #header>
      <div :class="classes.root">
        <nav :class="classes.navigation">
          <RouterLink :class="classes.navigation_link" to="/">Главная</RouterLink>
          <a :class="classes.navigation_link" target="_blank" href="https://github.com/garaev-vadim-m/repetition"
            >(icon) GitHub проекта</a
          >
        </nav>
        <Button>
          <RouterLink :class="classes.navigation_link" to="/admin">Вход</RouterLink>
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
            <!-- entities -->
            <div :class="classes.project">
              <div>
                <h4>Проект на vuejs + vite</h4>
                <p>Технологии:</p>
                <ul>
                  <li>vuejs</li>
                  <li>vue router</li>
                  <li>pinia</li>
                  <li>vite</li>
                  <li>axios</li>
                </ul>
              </div>
              <div :class="classes.project_action">
                <RouterLink to="/">Link github</RouterLink>
                <Button>Драйвер детализации</Button>
              </div>
            </div>
            <div :class="classes.project">
              <div>
                <h4>Проект vuejs + ts + vite</h4>
                <p>Технологии:</p>
                <ul>
                  <li>vuejs</li>
                  <li>vue router</li>
                  <li>typescript</li>
                  <li>pinia</li>
                  <li>vite</li>
                  <li>axios</li>
                </ul>
              </div>
              <div :class="classes.project_action">
                <RouterLink to="/">Link github</RouterLink>
                <Button>Драйвер детализации</Button>
              </div>
            </div>
            <div :class="classes.project">
              <div>
                <h4>Проект на Go</h4>
                <p>Технологии:</p>
                <ul>
                  <li>Go</li>
                </ul>
              </div>
              <div :class="classes.project_action">
                <RouterLink to="/">Link github</RouterLink>
                <Button>Драйвер детализации</Button>
              </div>
            </div>
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
  height: calc(100vh - 53px - 32px);
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
