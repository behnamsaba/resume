import React from 'react';
import ExperienceEntry from './ExperienceEntry';

// Data structure for experience
const experienceData = [
    {
        role: 'Full Stack Developer – Galliot',
        period: 'January 2023 - Present',
        responsibilities: [
            'Collaborated in all stages of the SDLC, from requirement analysis and application design to coding and testing, and collaborated with product managers, designers, and software engineers ensuring timely and efficient delivery of the best software solutions aligned with business goals.',
            'Developed responsive user interfaces and Chrome extensions using React, with a focus on reusable JavaScript and TypeScript components reducing development time by 30%.',
            'Engineered backends, microservices, and APIs using Python, Node.js, Flask, Express, Azure Functions, and AWS Lambda, managing PostgreSQL for cost efficiency and DynamoDB for durability and flexibility. Integrated third-party APIs to enhance features and functionality.',
            'Enhanced scalability, reliability, and cost efficiency by implementing advanced cloud solutions, achieving cost savings of up to 50%. '
        ],
    },
    {
        role: 'Project Management Associate, Market Research Analyst - KCE',
        period: 'October 2018 - February 2021',
        responsibilities: [
            'Expedited the Sangan Iron Ore project completion ahead of schedule through efficient communication and coordination with multiple contractors, effectively managing documents, requisitions, and meetings.',
            'Collaborated with a team of six analysts in an agile environment to produce influential monthly and quarterly commodity outlook reports using Microsoft Office, delivering critical market insights.',
        ],
    },
    {
        role: 'Sales Associate – Rexroth Ag',
        period: 'May 2017 - September 2018',
        responsibilities: [
            "Generated accurate pricing proposals by analyzing customer requirements and aligning them with vendor pricelists.",
        ],
    }
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
