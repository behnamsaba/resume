import React from 'react';
import ExperienceEntry from './ExperienceEntry';

// Data structure for experience
const experienceData = [
    {
        role: 'Full Stack Developer – Galliot',
        period: 'January 2023 - Present',
        responsibilities: [
            'Participated in all stages of Software Development Life Cycle (SDLC), from requirement analysis and application design to coding and testing, and collaborated with product managers, designers, and software engineers to ensure efficient development and delivery of software solutions.',
            'Developed responsive user interfaces and Chrome extensions using React, with a focus on reusable JavaScript and TypeScript components',
            'Developed backend systems with REST architecture using Node.js, Flask, and Azure functions, managed PostgreSQL and MongoDB databases, and integrated third-party APIs for front-end enhancement',
            'Implemented cloud solutions to enhance scalability, reliability, and cost efficiency.'
        ],
    },
    {
        role: 'Project Management Associate, Market Research Analyst - KCE',
        period: 'October 2018 - February 2021',
        responsibilities: [
            'Efficiently completed the Sangan Iron Ore project through effective communication and by coordinating with multiple contractors to track documents, requisitions, and meetings.',
            'Led a team of six analysts in an agile environment producing influential monthly and quarterly reports on commodities outlook, providing valuable market Insights.',
        ],
    },
    {
        role: 'Sales Associate – Rexroth Ag',
        period: 'May 2017 - September 2018',
        responsibilities: [
            "Generated accurate pricing proposals by analyzing customer requirements and aligning them with vendors' pricelists.",
        ],
    },
    {
        role: 'Intern - Irantalent.com',
        period: 'February 2016 - May 2017',
        responsibilities: [
            'Collaborated with the sales team to identify potential client opportunities.',
        ],
    },
];

// Main Experience component
const Experience = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <h2 className='bg-gray-50 text-center text-2xl font-bold mb-4'>
                EXPERIENCE
            </h2>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    {experienceData.map((item, index) => (
                        <ExperienceEntry
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
