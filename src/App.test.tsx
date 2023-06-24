import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  render(<App />);
  const divElement = screen.getByTestId('App.Container');
  expect(divElement).toBeInTheDocument();
});
