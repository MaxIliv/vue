import { render, fireEvent } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import MyStepper from './MyStepper.vue';

const valueSelector = 'stepper-value'
const buttonSelector = 'increment'

describe('MyStepper', () => {
  it('should work', () => {
    const { getByText } = render(MyStepper, {
      props: {
        max: 2
      }
    });

    getByText('Stepper Count: 0');
  })
  it('should not be more that 2', async () => {
    const { getByTestId } = render(MyStepper, {
      props: {
        max: 2
      }
    });

    expect(getByTestId(valueSelector).textContent).toBe('Stepper Count: 0')

    const button = getByTestId(buttonSelector);
    
    await fireEvent.click(button)

    expect(getByTestId(valueSelector).textContent).toBe('Stepper Count: 1')

    await fireEvent.click(button)
    await fireEvent.click(button)
    await fireEvent.click(button)

    expect(getByTestId(valueSelector).textContent).toBe('Stepper Count: 2')
  })
})