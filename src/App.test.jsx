import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the resume home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /behnam saba/i, level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getAllByText(/behnam saba/i).length).toBeGreaterThan(0);
});

test('sets a page title and canonical URL per route', () => {
  window.history.pushState({}, '', '/projects');
  render(<App />);
  expect(document.title).toBe('Projects | Behnam Saba – Software Engineer');
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://bensaba.dev/projects');
  window.history.pushState({}, '', '/');
});
