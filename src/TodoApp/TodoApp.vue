<script setup lang="ts">
import { ref } from 'vue'

const index = ref(0);

type Todo = {
  id: number
  text: string
  completed: boolean
}

const newTodo = ref('')

const todos = ref<Todo[]>([
  {
    id: index.value,
    text: 'Learn Vue.js 3',
    completed: false,
  },
])

function createTodo() {
  todos.value.push({
    id: ++index.value,
    text: newTodo.value,
    completed: false,
  })
}
</script>

<template>
  <div>
    <div>
      <div v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }" data-testid="todo">
        <label>
          <input
            data-testid="todo-checkbox"
            type="checkbox"
            v-model="todo.completed"
          />
          {{ todo.text }}
        </label>
      </div>

      <form data-testid="form" @submit.prevent="createTodo">
        <input data-testid="new-todo" v-model="newTodo" />
      </form>
    </div>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>