<script setup></script>

<template>
  <header :class="classes.root">
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
</template>

<style module="classes" lang="scss">
.root {
  height: 36px;
  padding: 8px 16px;
  border-bottom: 1px solid #ffffff5e;
  display: flex;
  align-items: center;
}
</style>
