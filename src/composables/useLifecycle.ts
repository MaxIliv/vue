import { onMounted, onUnmounted } from 'vue';

export function useLifecycle({ tag }: { tag: string }) {
  onMounted(() => console.log(`[${tag}] Mount`))
  onUnmounted(() => console.log(`[${tag}] Unount`))
}