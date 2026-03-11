<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '@/shared/ui/Button.vue';
import MainLayout from '@/widgets/layout/MainLayout.vue';

type User = {
  id: number;
  name: string;
  email: string;
};
const users = ref<User[]>([]);
async function getUsers(params = {}) {
  const data = ref([
    {
      id: 1,
      name: 'name',
      email: 'email',
    },
    {
      id: 2,
      name: 'name',
      email: 'email',
    },
    {
      id: 3,
      name: 'name',
      email: 'email',
    },
    {
      id: 4,
      name: 'name',
      email: 'email',
    },
    {
      id: 5,
      name: 'name',
      email: 'email',
    },
    {
      id: 6,
      name: 'name',
      email: 'email',
    },
  ]);
  users.value = [...data.value];
}

const modelUser = ref({
  id: 0,
  name: '',
  email: '',
});

async function setUser(formData: Pick<User, 'name' | 'email'>) {
  // await apiClient.post('/users', formData);
  users.value.push({
    ...formData,
    id: Math.random(),
  });
  modelUser.value.name = '';
  modelUser.value.email = '';
  // getUsers();
}

async function deleteUser(user: User) {
  users.value = users.value.filter(({ id }) => id !== user.id);
}

async function setUpdateUser(user: User) {
  const { id } = modelUser.value;

  // await apiClient.patch(`/users/${id}`, { name, email });
  const userIndex = users.value.findIndex(({ id }) => id === user.id);
  users.value[userIndex] = {
    id,
    name: modelUser.value.name,
    email: modelUser.value.email,
  };
  modelUser.value.name = '';
  modelUser.value.email = '';
}

function changeUser(user: User) {
  modelUser.value = { ...user };
}

onMounted(getUsers);
</script>

<template>
  <MainLayout>
    <template #header>
      <RouterLink to="/">Главная</RouterLink>
      <Button>Выйти</Button>
    </template>
  </MainLayout>
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
