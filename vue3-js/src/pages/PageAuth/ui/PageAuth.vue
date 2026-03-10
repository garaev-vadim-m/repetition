<script setup>
import MainLayout from '@/widgets/layout/MainLayout.vue';
</script>
<template>
  <MainLayout>
    <template #header>
      <a href="/">asd</a>
    </template>
    <div :class="classes.root">
      <p>BaseComponent</p>
    </div>
  </MainLayout>
</template>
<style module="classes" lang="scss">
.root {
}
</style>
