<script setup lang="ts">
import { useLifecycle } from '@/composables/useLifecycle';
import { increment } from '@/utils/increment'
import { computed, ref, watch } from 'vue'

type MyStepperProps = {
  max: number
}

const props = defineProps<MyStepperProps>()

useLifecycle({ tag: 'stepper' });

const count = ref(0)

const onClick = () => {
  count.value = increment(count.value, props.max)
}

const isMaxValue = computed(() => count.value === props.max);

watch(() => props.max, () => {
  if (count.value >= props.max) {
    count.value = props.max;
  }
});
</script>

<template>
  <div class="stepper">
    <p data-testid="stepper-value">Stepper Count: {{ count }}</p>
    <p v-if="isMaxValue">You have reached max value :)</p>
    <button data-testid="increment" @click="onClick">Increment</button>
  </div>
</template>

<style scoped>
.stepper {
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow:
    2px 2px 4px 1px #33333333,
    0px 2px 4px 1px #33333333;
}

.stepper button {
  cursor: pointer;
}
</style>
