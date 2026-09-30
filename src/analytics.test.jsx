import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { EVENTS, trackEvent } from './analytics';
import General from './General';
import ProjectCard from './ProjectCard';

test('trackEvent builds Umami data attributes', () => {
  expect(trackEvent(EVENTS.projectLink, { project: 'Benflow', link: 'live' })).toEqual({
    'data-umami-event': 'project-link-click',
    'data-umami-event-project': 'Benflow',
    'data-umami-event-link': 'live',
  });
});

test('contact links carry their Umami events', () => {
  render(<General />, { wrapper: MemoryRouter });
  expect(screen.getByRole('link', { name: /resume in pdf/i })).toHaveAttribute('data-umami-event', EVENTS.resumePdf);
  expect(screen.getByRole('link', { name: /ben@bensaba\.dev/i })).toHaveAttribute('data-umami-event', EVENTS.email);
  expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('data-umami-event', EVENTS.linkedin);
});

test('project links report the project name and link type', () => {
  render(<ProjectCard title='Benflow' descriptions={[]} liveLink='https://example.com' />);
  const live = screen.getByRole('link', { name: /live version/i });
  expect(live).toHaveAttribute('data-umami-event', EVENTS.projectLink);
  expect(live).toHaveAttribute('data-umami-event-project', 'Benflow');
  expect(live).toHaveAttribute('data-umami-event-link', 'live');
});
