<script setup lang="ts">
import Button from '@/shared/ui/Button.vue';
import InputForm from '@/shared/ui/InputForm.vue';
import MainLayout from '@/widgets/layout/MainLayout.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref({
  email: '',
  password: '',
});

const errors = ref({
  email: '',
  password: '',
});

const router = useRouter();

function sendAuth() {
  let hasError = false;

  errors.value.email = '';
  errors.value.password = '';
  hasError = false;

  if (!user.value.email) {
    errors.value.email = 'Email обязателен';
    hasError = true;
  } else if (!/^\S+@\S+\.\S+$/.test(user.value.email)) {
    errors.value.email = 'Неверный формат email';
    hasError = true;
  }

  if (!user.value.password) {
    errors.value.password = 'Пароль обязателен';
    hasError = true;
  }
  if (hasError) return;
  return router.push('/admin');
}
</script>
<template>
  <MainLayout>
    <template #header>
      <RouterLink :class="classes.navigation_link" to="/">Главная</RouterLink>
    </template>
    <template #main>
      <div :class="classes.root">
        <h3>Авторизация</h3>
        <form action="subb-form" autocomplete="off" :class="classes.auth">
          <InputForm
            v-model="user.email"
            label="Email"
            type="email"
            placeholder="Введите email.."
            :error-message="errors.email"
            :required="true" />

          <InputForm
            v-model="user.password"
            label="Пароль"
            type="password"
            placeholder="Введите пароль.."
            :error-message="errors.password"
            :required="true" />

          <Button type="submit" @click.prevent="sendAuth">Войти</Button>
        </form>
      </div>
    </template>
  </MainLayout>
</template>
<style module="classes" lang="scss">
.root {
  display: grid;
  place-content: center;
  height: calc(100vh - 53px);
}

.navigation_link {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  opacity: 100%;
  transition: all 0.3s ease;
  &:hover {
    opacity: 70%;
  }
}

.auth {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 300px;
  border: 1px solid rgb(105, 105, 105);
  border-radius: 5px;
  height: 250px;
  display: grid;
  place-content: center;
}

// UI

.input {
  height: 24px;
}

.label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.errorMessage {
  color: red;
  font-weight: 700;
  font-size: 12px;
}
</style>
