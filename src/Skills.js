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
        skills: ['Flask', 'Express.js', 'Node.js', 'Authentication/Authorization (JWT, OAuth)'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Database & ORM',
        skills: ['SQL', 'PostgreSQL', 'SQLAlchemy', 'Schema Design', 'MongoDb', 'T-SQL', 'Microsoft SQL Server', 'Redis'],
        gridTemplate: 'grid-rows-3 grid-flow-col',
    },
    {
        category: 'Testing & Version Control',
        skills: ['Unit Testing', 'Integration Testing', 'Jest', 'Jasmine', 'Git', 'GitHub'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            'Azure Functions',
            'Azure App Service',
            'Azure Cosmos DB',
            'Azure Storage',
            'AWS Lambda',
            'AWS DynamoDB',
            'AWS API gateway',
            'CI/CD',
            'Linux Bash',
            'Docker'
        ],
        gridTemplate: 'grid-rows-2 grid-flow-col',
    },
    {
        category: 'Architectural Patterns & Design Principles',
        skills: [
            'Serverless Architecture',
            'Microservices, Architecture',
            'Event-Driven Architecture (EDA)',
            'Single Page Application (SPA)',
            'RESTful API Design',
            'Model View Controller (MVC)',
            'Responsive Design',
            'Rcalable Architectures'
        ],
        gridTemplate: 'grid-rows-4 grid-flow-col',
    },
    {
        category: 'Data Serialization Languages',
        skills: [
            'XML',
            'JSON',
            'YAML'
        ],
        gridTemplate: 'grid-rows-1 grid-flow-col',
    },
    {
        category: 'Additional/Other Skills',
        skills: ['No-code platforms', 'Algorithms', 'OpenAI API', 'LangChain', 'Microsoft Office','Software Developmnt Life Cycle'],
        gridTemplate: 'grid-rows-2 grid-flow-col',
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
