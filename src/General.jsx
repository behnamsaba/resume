import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from './data/contact';
import { trackEvent } from './analytics';

const ContactItem = ({ icon: Icon, size, text, link, iconColor, isHeader, event }) => {
  const className = isHeader ? 'text-2xl font-bold mb-1' : 'font-semibold';
  const isExternal = link && /^(https?:|mailto:|tel:)/.test(link);
  return (
    <li className='flex items-center gap-3 px-2 py-2'>
      {Icon && (
        <Icon
          size={size}
          className={`${iconColor || 'text-gray-500'} dark:text-white dark:drop-shadow`}
        />
      )}
      {link ? (
        isExternal ? (
          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='hover:text-blue-700'
            {...(event && trackEvent(event))}
          >
            {text}
          </a>
        ) : (
          <Link to={link} className='hover:text-blue-700'>
            {text}
          </Link>
        )
      ) : (
        <p className={className}>{text}</p>
      )}
    </li>
  );
};

const General = () => {
  return (
    <section className='my-6'>
      <div className='section-card p-6 sm:p-8'>
        <h1 className='text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-bold mb-4'>Behnam Saba</h1>
        <p className='font-medium text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 px-2 py-2'>
          Software Engineer in Los Angeles, CA, building AI-powered web
          products with React, TypeScript, and PostgreSQL. Currently at
          Tapistro.
        </p>
        <ul className='text-slate-700 dark:text-slate-300 list-none text-left'>
          {contactInfo.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </ul>
        <h2 className='section-title'>Summary</h2>
        <p className='rounded-lg py-2 px-2 text-left'>
          Software engineer with over five years of experience building production web applications across the stack. I currently own and deliver end-to-end features for an AI-powered SaaS platform at Tapistro, working in React, TypeScript, React Flow, Material UI, REST APIs, and PostgreSQL on Google Cloud. I care about shipping reliably: I maintain Playwright end-to-end suites and CI automation, manage cloud infrastructure with Pulumi, and use agentic development tools such as Claude Code, OpenAI Codex, and Cursor to move faster without trading away quality.
        </p>
      </div>
    </section>
  );
};

export default General;
