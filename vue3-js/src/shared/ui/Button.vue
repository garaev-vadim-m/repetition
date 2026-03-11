<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'default' | 'large';
    onClick?: () => any;
    type?: 'submit' | 'button' | 'reset';
  }>(),
  {
    size: 'default',
    type: 'button',
  },
);
</script>

<template>
  <button
    v-bind="props"
    :type="props.type"
    :class="[
      'rounded-md font-medium text-white transition cursor-pointer',
      'bg-gray-700 hover:bg-gray-800 active:scale-[0.98]',
      'focus:outline-none focus:ring-2 focus:ring-indigo-500',
      size === 'large' ? 'px-4 py-2' : 'px-3 py-2 text-sm',
    ]">
    <slot>BaseComponent</slot>
  </button>
</template>
