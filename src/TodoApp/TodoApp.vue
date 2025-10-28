<script setup lang="ts">
import { ref, useId } from 'vue'

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

function toggleComplete(id: number) {
  todos.value.forEach((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
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
            :value="todo.completed"
            @change="toggleComplete(todo.id)"
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