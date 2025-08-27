import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from './data/contact';

const ContactItem = ({ icon: Icon, size, text, link, iconColor, isHeader }) => {
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
        <h1 className='text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-bold mb-4'>Welcome!</h1>
        <p className='font-medium text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 px-2 py-2'>
          Hello, my name is Behnam Saba, and I am a Software Engineer
          based in Los Angeles, California. You are viewing the
          deployed version of my resume. Feel free to browse around,
          and if you'd like to get in touch, all my contact details
          are conveniently listed below. Looking forward to connecting
          with you!
        </p>
        <ul className='text-slate-700 dark:text-slate-300 list-none text-justify'>
          {contactInfo.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </ul>
        <h2 className='section-title'>Summary</h2>
        <p className='rounded-lg py-2 px-2 text-justify'>
          I'm a software engineer who loves coding — it’s more than a job, it’s my hobby. I’m comfortable working across both frontend and backend, using technologies like React, Redux, Next.js, Flask, and more. I enjoy learning and experimenting with new tools, and I love building products that make an impact. To me, writing code feels like playing with Lego — taking pieces and turning them into something amazing. I’m excited to bring that passion and adaptability to a dynamic, forward-thinking team
        </p>
      </div>
    </section>
  );
};

export default General;
