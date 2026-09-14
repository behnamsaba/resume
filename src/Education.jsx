import React from 'react';
import { educationData } from './data/education';

const EducationItem = ({ title, institution, date }) => (
    <li className='font-semibold hover:font-bold px-1 py-1'>
        {title}
        {institution && ` – ${institution}`}
        {date && <p className='text-sm'>{date}</p>}
    </li>
);

const Education = () => {
    return (
        <section className='my-6'>
            <div className='section-card p-6 sm:p-8'>
                <h2 className='section-title'>EDUCATION AND CERTIFICATIONS</h2>
                <ul className='list-none space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-center'>
                    {educationData.map((item, index) => (
                        <EducationItem key={index} {...item} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Education;
