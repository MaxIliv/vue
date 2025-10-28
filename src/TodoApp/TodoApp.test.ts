import { mount } from '@vue/test-utils';

import TodoApp from './TodoApp.vue';
import { expect, test } from 'vitest';

const TEST_ATTRIBUTE = 'data-testid';
const selector = (name: string) => (`[${TEST_ATTRIBUTE}="${name}"`);

test('render a todo', () => {
  const wrapper = mount(TodoApp);

  const todo = wrapper.get('[data-testid="todo"');
  expect(todo.text()).toBe('Learn Vue.js 3');
})

test('creates a new todo', async () => {
  const wrapper = mount(TodoApp);
  expect(wrapper.findAll('[data-testid="todo"]')).toHaveLength(1);

  await wrapper.get(selector('new-todo')).setValue('New todo');
  await wrapper.get('[data-testid="form"]').trigger('submit');

  expect(wrapper.findAll('[data-testid="todo"]')).toHaveLength(2);
})

test('completes a todo', async () => {
  const wrapper = mount(TodoApp);

  await wrapper.get(selector('todo-checkbox')).setValue(true);

  expect(wrapper.get(selector('todo')).classes()).toContain('completed');
})