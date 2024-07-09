import React from 'react';

// Data structure for education and certifications
const educationData = [
    {
        title: 'Meta React Native Specialization',
        institution: 'Meta',
        date: 'July 2024',
    },
    {
        title: 'Shopify Training',
        institution: 'LinkedIn',
        date: 'June 2024',
    },
    {
        title: 'Microsoft Azure - Developer Associate AZ-204 Certificate',
        institution: 'Microsoft',
        date: 'December 2023',
    },
    {
        title: 'Microsoft Azure - Fundamentals AZ-900 Certificate',
        institution: 'Microsoft',
        date: 'November 2023',
    },
    {
        title: 'Full-Stack Software Engineering Program Certificate',
        institution: 'Springboard',
        date: 'September 2022 – August 2023',
    },
    {
        title: 'Bachelor of Science – Industrial Engineering',
        date: 'September 2011 - February 2016',
        institution: 'Azad University'

    },
    {
        title: 'Certificate: Word, Excel, PowerPoint, Access, Java, Python',
        institution: 'MFT',
    },
];

// Component for individual education/certification item
const EducationItem = ({ title, institution, date }) => (
    <li className='font-semibold hover:font-bold px-1 py-1'>
        {title}
        {institution && ` – ${institution}`}
        {date && <p className='text-sm'>{date}</p>}
    </li>
);

// Main Education component
const Education = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <h2 className='bg-gray-50 text-center text-2xl font-bold mb-4'>
                EDUCATION AND CERTIFICATIONS
            </h2>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    {educationData.map((item, index) => (
                        <EducationItem
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Education;
