<script lang="ts" setup>
withDefaults(
  defineProps<{
    isAdmin?: boolean
  }>(),
  {
    isAdmin: false,
  },
)
</script>

<template>
  <nav>
    <RouterLink data-testid="home" to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/test">Test</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/todo">Todo</RouterLink>
    <RouterLink v-if="isAdmin" data-testid="admin" to="#">Admin</RouterLink>
    <ul v-show="isAdmin" data-testid="user-dropdown" to="#">
      <li>Admin</li>
      <li>Create user</li>
    </ul>
    <RouterLink to="#">CI / CD</RouterLink>
  </nav>
</template>

<style></style>
