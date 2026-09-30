import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://bensaba.dev';
const SITE_TITLE = 'Behnam Saba – Software Engineer';

// Per-route page titles; paths must match the routes in Resume.jsx and public/sitemap.xml
const pageTitles = {
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/education': 'Education & Certifications',
  '/skills': 'Skills',
};

// Keeps the tab title and canonical URL in sync with the current route, so Google
// indexes each tab as its own page
const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = pageTitles[pathname];
    document.title = pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${pathname === '/' || !pageTitle ? '/' : pathname}`;
  }, [pathname]);

  return null;
};

export default PageMeta;
