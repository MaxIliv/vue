<script setup lang="ts">
import MyStepper from '@/components/MyStepper.vue';
import TestForm from '@/components/TestForm.vue';
import { ref } from 'vue';

const max = ref(10);
const dynamicKey = ref(0);
</script>

<template>
  <div class="test">
    <section>
      <h1>This is an test page</h1>
      <button @click="dynamicKey++">Change Stepper Key</button>
      <MyStepper :max :key="dynamicKey.toString()" />
      <TestForm v-model:number="max" />
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .test {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>