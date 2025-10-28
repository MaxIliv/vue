<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends /* @vue-ignore */ InputHTMLAttributes {

}

defineProps<Props>();
const model = defineModel({ required: true });
</script>

<template>
  <input v-bind="$props" v-model="model" />
</template>

<style>

</style>