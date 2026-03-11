<script setup lang="ts">
const modelValue = defineModel<string>({
  required: true,
});

const {
  label,
  placeholder = '',
  errorMessage = '',
  type = 'text',
  required = false,
} = defineProps<{
  label: string;
  errorMessage?: string;
  placeholder?: string;
  type?: 'password' | 'email' | 'text';
  required?: boolean;
}>();

const id = `input-${Math.random().toString(36).slice(2)}`;
</script>

<template>
  <div class="flex flex-col gap-1 relative">
    <label :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      class="h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      :class="errorMessage && 'border-red-500 focus:ring-red-500 focus:border-red-500'" />

    <p v-if="errorMessage" class="text-xs text-red-500 font-medium absolute -bottom-4">
      {{ errorMessage }}
    </p>
  </div>
</template>
