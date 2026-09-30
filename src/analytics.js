// Umami click tracking (https://umami.is/docs/track-events).
// The Umami script in index.html records a click on any element carrying these
// data attributes; without the script (local dev, tests) they are inert.

// Event names shown in the Umami dashboard
export const EVENTS = {
  resumePdf: 'resume-pdf-click',
  email: 'email-click',
  linkedin: 'linkedin-click',
  github: 'github-click',
  projectLink: 'project-link-click',
};

// Builds the data attributes for an event, e.g.
// trackEvent(EVENTS.projectLink, { project: 'Benflow', link: 'live' })
// → { 'data-umami-event': 'project-link-click', 'data-umami-event-project': 'Benflow', ... }
export const trackEvent = (name, properties = {}) => ({
  'data-umami-event': name,
  ...Object.fromEntries(
    Object.entries(properties).map(([key, value]) => [`data-umami-event-${key}`, value])
  ),
});
