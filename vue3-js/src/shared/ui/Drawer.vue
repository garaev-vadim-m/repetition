<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue';

const modelValue = defineModel<boolean>({ default: false });

function close() {
  modelValue.value = false;
}

function onEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') close();
}

watch(modelValue, (v) => {
  document.body.style.overflow = v ? 'hidden' : '';
});

onMounted(() => window.addEventListener('keydown', onEsc));
onUnmounted(() => window.removeEventListener('keydown', onEsc));
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0">
    <div v-if="modelValue" class="fixed inset-0 z-40 bg-indigo-950/40 backdrop-blur-sm" @click="modelValue = false" />
  </Transition>

  <Transition
    enter-active-class="transform transition duration-300 ease-out"
    leave-active-class="transform transition duration-200 ease-in"
    enter-from-class="translate-x-full"
    leave-to-class="translate-x-full">
    <div
      v-if="modelValue"
      class="fixed top-0 right-0 z-50 h-full w-[420px] max-w-full bg-gray-900/70 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col"
      @click.stop>
      <div class="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
        <slot name="header">
          <h2 class="text-white font-semibold">Drawer title</h2>
        </slot>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <slot name="body" />
      </div>
    </div>
  </Transition>
</template>
