<script setup lang="ts">
import Button from '@/shared/ui/Button.vue';
</script>
<template>
  <div :class="classes.root">
    <div>
      <h4><slot name="title" /></h4>
      <slot name="body" />
    </div>
  </div>
</template>
<style module="classes" lang="scss">
.root {
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
