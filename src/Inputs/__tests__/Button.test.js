import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders active button', async () => {
  // GIVEN: button is not disabled
  const disabled = false;

  // WHEN: we render the button
  render(
    <Button 
      disabled={disabled}
      onClick={() => {console.log("button rendered")}} 
    > Click me
    </Button>
  );

  // THEN: the button exists
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
  // AND: is enabled
  expect(screen.getByRole('button')).toBeEnabled();

});

test('renders inactive button', async () => {
  // GIVEN: button is disabled
  const disabled = true;

  // WHEN: we render the button
  render(
    <Button 
      disabled={disabled}
      onClick={() => {console.log("button rendered")}} 
    > Click me
    </Button>
  );

  // THEN: the button exists
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
  // AND: is disabled
  expect(screen.getByRole('button')).not.toBeEnabled();

});