<script setup>
import { onMounted, ref } from 'vue';
import { apiClient } from '@/shared/api/apiClient';

const users = ref([]);
async function getUsers(params = {}) {
  const { data } = await apiClient.get('/users');

  users.value = [...data];
}

const modelUser = ref({
  id: 0,
  name: '',
  email: '',
});

/**
 * @param {any} formData
 */
async function setUser(formData) {
  await apiClient.post('/users', formData);
  modelUser.value.name = '';
  modelUser.value.email = '';
  getUsers();
}

/**
 * @param {{ id: any; }} user
 */
async function deleteUser(user) {
  console.log(user);
  await apiClient.delete(`/users/${user.id}`);
  getUsers();
}

async function setUpdateUser() {
  const { id, name, email } = modelUser.value;

  await apiClient.patch(`/users/${id}`, { name, email });

  modelUser.value.name = '';
  modelUser.value.email = '';

  await getUsers();
}

/**
 * @param {{ id: number; name: string; email: string; } | { id: number; name: string; email: string; }} user
 */
function changeUser(user) {
  modelUser.value = { ...user };
}

onMounted(getUsers);
</script>

<template>
  <div :class="classes.root">
    <div v-for="user of users">
      <div>
        {{ user }}
        <button @click="changeUser(user)">change</button>
        <button @click="setUpdateUser(user)">update</button>
        <button type="submit" @click.prevent="deleteUser(user)">DeleteUser</button>
      </div>
    </div>
    <input v-model="modelUser.name" />
    <input v-model="modelUser.email" />
    <button type="submit" @click.prevent="setUser(modelUser)">SetUser</button>
  </div>
</template>

<style module="classes">
.root {
}
</style>
