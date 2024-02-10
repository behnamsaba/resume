import React from 'react';

// Data structure for skills
const skillsData = [
    {
        category: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java (Basic)'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Front-end Development',
        skills: [
            'React.js',
            'Next.js',
            'Redux Toolkit',
            'jQuery',
            'HTML',
            'CSS',
            'Tailwind CSS',
            'Bootstrap',
        ],
        gridTemplate: 'grid-rows-4 grid-flow-col',
    },
    {
        category: 'Back-end Development',
        skills: ['Flask', 'Express.js', 'Node.js', 'Redis'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Database Knowledge',
        skills: ['SQL', 'PostgreSQL', 'SQLAlchemy', 'Schema Design', 'MongoDb', 'T-SQL', 'Microsoft SQL Server'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Testing',
        skills: ['Unit Testing', 'Integration Testing', 'Jest', 'Jasmine'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Additional Technologies',
        skills: [
            'Docker',
            'CI/CD',
            'LangChain',
            'OpenAI API',
            'GitHub/Git',
            'Linux',
            'Microsoft365',
            'Algorithms',
            'REST APIs',
            'Software Development Life Cycle',
            'Distributed Architecture',
            'Model-View-Controller (MVC)',
            'Event-Driven Architecture',
        ],
        gridTemplate: 'grid-rows-6 grid-flow-col',
    },
    {
        category: 'Cloud Skills',
        skills: [
            'Serverless Computing',
            'Azure Functions',
            'Azure App Service',
            'Azure Storage',
            'Cosmos DB',
            'Virtual Machines',
        ],
        gridTemplate: 'grid-rows-4 grid-flow-col',
    },
    {
        category: 'Soft Skills',
        skills: ['Collaboration', 'Problem-Solving', 'Teamwork'],
        gridTemplate: 'grid-rows-1 grid-flow-col',
    },
];

// Component for individual skill items
const SkillItem = ({ skill }) => (
    <li className='text-base hover:bg-blue-100 rounded-lg px-2 py-2'>
        {skill}
    </li>
);

// Component for skill categories
const SkillCategory = ({ category, skills, gridTemplate }) => (
    <>
        <li className='font-semibold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50'>
            {category}
        </li>
        <ul className={`grid ${gridTemplate} content-between`}>
            {skills.map((skill, index) => (
                <SkillItem
                    key={index}
                    skill={skill}
                />
            ))}
        </ul>
    </>
);

// Main Skills component
const Skills = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <h2 className='bg-gray-50 text-center text-2xl font-bold mb-4'>
                Skills
            </h2>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    {skillsData.map((data, index) => (
                        <SkillCategory
                            key={index}
                            {...data}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
