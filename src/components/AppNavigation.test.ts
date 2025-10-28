import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import AppNavigation from './AppNavigation.vue'

const TEST_ATTRIBUTE = 'data-testid'
const byAttribute = (name: string) => `[${TEST_ATTRIBUTE}="${name}"`

test('render an app navigation', () => {
  const wrapper = mount(AppNavigation)

  expect(wrapper.find(byAttribute('home')).text()).toBe('Home')
})
test('does not render an admin link', () => {
  const wrapper = mount(AppNavigation)

  expect(wrapper.find(byAttribute('admin')).exists()).toBe(false)
})

// with internal state
// test('render an admin link', async () => {
//   const wrapper = mount(AppNavigation, {
//     data() {
//       return { isAdmin: true };
//     }
//   });

//   // @ts-expect-error isAdmin needs to be true
//   wrapper.vm.isAdmin = true;
//   await wrapper.vm.$nextTick();

//   expect(wrapper.get(byAttribute('admin')).text()).toBe('Admin')
// })

test('render an admin link', async () => {
  const wrapper = mount(AppNavigation, {
    props: {
      isAdmin: true,
    },
  })

  expect(wrapper.get(byAttribute('admin')).text()).toBe('Admin')
})

test('does not show the user dropdown', () => {
  const wrapper = mount(AppNavigation)

  expect(wrapper.get(byAttribute('user-dropdown')).isVisible()).toBe(false)
})

test('render an user dropdown if admin', async () => {
  const wrapper = mount(AppNavigation, {
    props: {
      isAdmin: true,
    },
  })

  expect(wrapper.get(byAttribute('user-dropdown')).isVisible()).toBe(true);
})
