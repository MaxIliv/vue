<script lang="ts" setup>
import { useLifecycle } from '@/composables/useLifecycle';

const number = defineModel('number');
useLifecycle({ tag: 'test-form' });
</script>

<template>
  <form @submit.prevent="">
    <input v-model="number" type="number" placeholder="Enter value" />
  </form>
</template>
<style>

</style>