<script setup></script>

<template>
  <header :class="classes.root_header">
    <slot name="header"></slot>
  </header>
  <main :class="classes.root_main">
    <slot name="main"></slot>
  </main>
</template>

<style module="classes" lang="scss">
.root_header {
  height: 36px;
  padding: 8px 16px;
  border-bottom: 1px solid #ffffff5e;
  display: flex;
  align-items: center;
}
.root_main {
  // padding: 16px;
}
</style>
