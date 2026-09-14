import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the resume home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getAllByText(/behnam saba/i).length).toBeGreaterThan(0);
});
