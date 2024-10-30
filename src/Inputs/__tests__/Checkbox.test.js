import { act } from 'react';
import { render, screen, within } from '@testing-library/react';
import Checkbox from '../Checkbox';

test('renders empty checkbox', async () => {
  // GIVEN: state is none
  const state = "none";

  // WHEN: we render the checkbox
  render(
    <Checkbox 
      state={state}
      onClick={() => {console.log("checkbox rendered")}} 
    />
  );

  // THEN: the checkbox exists
  const checkbox = screen.getByTestId('checkbox'); 
  expect(checkbox).toBeInTheDocument();
  // AND: has empty icon
  const icon = within(checkbox).getByTestId("none", {name: "square", size: "xl"})
  expect(icon).toBeInTheDocument();

});

test('renders indeterminate checkbox', async () => {
    // GIVEN: state is minus
    const state = "minus";
  
    // WHEN: we render the checkbox
    render(
      <Checkbox 
        state={state}
        onClick={() => {console.log("checkbox rendered")}} 
      />
    );
  
    // THEN: the checkbox exists
    const checkbox = screen.getByTestId('checkbox'); 
    expect(checkbox).toBeInTheDocument();
    // AND: has minus icon
    const icon = within(checkbox).getByTestId("minus", {name: "minus", size: "xl"})
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("blue-box")
});

test('renders checked checkbox', async () => {
    // GIVEN: state is check
    const state = "check";
  
    // WHEN: we render the checkbox
    render(
      <Checkbox 
        state={state}
        onClick={() => {console.log("checkbox rendered")}} 
      />
    );
  
    // THEN: the checkbox exists
    const checkbox = screen.getByTestId('checkbox'); 
    expect(checkbox).toBeInTheDocument();
    // AND: has minus icon
    const icon = within(checkbox).getByTestId("check", {name: "check", size: "xl"})
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("blue-box")
});