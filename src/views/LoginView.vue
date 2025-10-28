<script lang="ts" setup>
import LoginForm, { type LoginFormData } from '@/components/LoginForm.vue';

function onSubmit(data: LoginFormData) {
  console.log(data);
}
</script>

<template>
  <div>
    <section>
      <h1>Please, login!</h1>
      <LoginForm @submit="onSubmit" />
    </section>
  </div>
</template>

<style>

</style>