import { mount } from '@vue/test-utils';
import MyStepper from './MyStepper.vue';
import { describe, expect, it } from 'vitest';

const valueSelector = '[data-testid=stepper-value]'
const buttonSelector = '[data-testid=increment]'

describe('My stepper @vue/test-utils', () => {
  const getWrapper = () => {
    return mount(MyStepper, {
      props: {
        max: 2
      }
    });
  }

  it('should render', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(valueSelector).text()).toContain('0');
  })

  it('should not be more than max', async () => {
    // Arrange
    const wrapper = getWrapper();
    expect(wrapper.find(valueSelector).text()).toContain('0');

    // Act
    await wrapper.find(buttonSelector).trigger('click');
    await wrapper.find(buttonSelector).trigger('click');
    await wrapper.find(buttonSelector).trigger('click');

    // Assert
    expect(wrapper.find(valueSelector).text()).toContain('2');
  })

  it('should display text message when max reached', async () => {
    // Arrange
    const wrapper = getWrapper();

    expect(wrapper.find(valueSelector).text()).toContain('0');

    // Act
    await wrapper.find(buttonSelector).trigger('click');
    await wrapper.find(buttonSelector).trigger('click');
    await wrapper.find(buttonSelector).trigger('click');

    // Assert
    expect(wrapper.text()).toContain('You have reached max value');
  })
})