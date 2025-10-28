<script lang="ts" setup>
import { ref } from 'vue'
import FormInput from './FormInput.vue'

export type LoginFormData = {
  email: string
  password: string
}

type LoginFormEmits = {
  submit: [payload: LoginFormData]
}

const emit = defineEmits<LoginFormEmits>()

const email = ref('')
const password = ref('')

function onSubmit() {
  emit('submit', {
    email: email.value,
    password: password.value,
  })
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormInput
      v-model="email"
      pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
      required
      type="email"
      placeholder="Enter an Email"
    />
    <FormInput v-model="password" required type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>

<style></style>
