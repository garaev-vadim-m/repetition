<script setup>
const { size = 'default', ...props } = defineProps({ size: String });
</script>
<template>
  <button v-bind="props" :class="[classes.root, classes[size]]"><slot>BaseComponent</slot></button>
</template>
<style module="classes" lang="scss">
.root {
}

.large {
  padding: 8px 16px;
}
.default {
  padding: 8px 8px;
}
</style>
