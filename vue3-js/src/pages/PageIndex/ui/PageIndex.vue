<script setup>
import { RouterLink } from 'vue-router';
import Button from '@/shared/ui/Button.vue';
import MainLayout from '@/widgets/layout/MainLayout.vue';
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
          <RouterLink :class="classes.navigation_link" to="/admin">Регистарция / Вход</RouterLink>
        </Button>
      </div>
    </template>
    <template #main>
      <div>
        <div>title</div>
        <div>list project (link git hub)</div>
      </div>
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
  gap: clamp(8px, 5vw, 16px);
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
</style>
