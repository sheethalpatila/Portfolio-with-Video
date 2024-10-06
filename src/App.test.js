// App.test.js
import React, { act } from 'react'; // Import act from React
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Intro section', () => {
  act(() => { // Wrap render call with act
    render(<App />);
  });
  
  const introElement = screen.getByTestId("name");
  expect(introElement).toBeInTheDocument();
});
test('renders the Intro section', () => {
  act(() => { // Wrap render call with act
    render(<App />);
  });
  const introElement = screen.getByText("Sheethal Patil A");
  expect(introElement).toBeInTheDocument();
});
