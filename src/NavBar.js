import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg text-sm md:text-base font-medium mx-1 md:mx-2 transition-all ${
        isActive
          ? 'text-white shadow-sm ring-1 ring-black/5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-500 dark:to-purple-600'
          : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
      }`
    }
    end={to === '/'}
    to={to}
    onClick={onClick}
  >
    {children}
  </NavLink>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className='fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-700'>
      <div className='page-container h-16 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg bg-white dark:bg-slate-100 shadow-sm ring-1 ring-slate-200 dark:ring-slate-600 overflow-hidden flex-shrink-0'>
            <img src='/logo.png' alt='Logo' style={{ width: '176px', height: '96px', maxWidth: 'none', marginTop: '-28px', marginLeft: '-8px' }} />
          </div>
          <div className='leading-tight'>
            <div className='text-slate-900 dark:text-slate-100 font-semibold'>Behnam Saba</div>
            <div className='text-slate-600 dark:text-slate-300 text-xs'>Software Engineer</div>
          </div>
        </div>

        <div className='hidden md:flex items-center'>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/projects'>Projects</NavItem>
          <NavItem to='/experience'>Experience</NavItem>
          <NavItem to='/education'>Education</NavItem>
          <NavItem to='/skills'>Skills</NavItem>
          <button
            type='button'
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className='ml-3 inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors'
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        <button
          aria-label='Toggle menu'
          aria-expanded={open}
          aria-controls='mobile-menu'
          className='md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors'
          onClick={() => setOpen((v) => !v)}
        >
          <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div id='mobile-menu' className='md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg'>
          <div className='page-container py-3 flex flex-col'>
            <NavItem to='/' onClick={closeMenu}>Home</NavItem>
            <NavItem to='/projects' onClick={closeMenu}>Projects</NavItem>
            <NavItem to='/experience' onClick={closeMenu}>Experience</NavItem>
            <NavItem to='/education' onClick={closeMenu}>Education</NavItem>
            <NavItem to='/skills' onClick={closeMenu}>Skills</NavItem>
            <button
              type='button'
              onClick={() => { toggleTheme(); closeMenu(); }}
              aria-pressed={theme === 'dark'}
              className='mt-2 self-start inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
