import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFoundRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => navigate('/', { replace: true }), 1200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <section className='my-6'>
      <div className='section-card p-6 sm:p-8 text-center'>
        <h2 className='section-title'>Page Not Found</h2>
        <p className='text-slate-700 dark:text-slate-300'>
          The path
          {' '}
          <code className='font-mono text-sm px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800'>
            {location.pathname}
          </code>
          {' '}does not exist. Redirecting…
        </p>
        <div className='mx-auto mt-4 h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-transparent dark:border-slate-600' aria-hidden='true' />
        <p className='mt-3'>
          <a href='/' className='underline'>Go Home now</a>
        </p>
      </div>
    </section>
  );
};

export default NotFoundRedirect;

