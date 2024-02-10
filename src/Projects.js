import React from 'react';
import ProjectCard from './ProjectCard';

// Data structure for project information
const projectData = [
    {
        title: 'Fashion e-Commerce website - (Comming Soon)',
        descriptions: [
            'E-commerce website utilizing TypeScript and enhanced its functionality by leveraging modern Microsoft Azure cloud services, ensuring robust and scalable solutions.',
            'Implemented React for frontend development, integrated React-router for client-side rendering, utilized Redux Toolkit for efficient state management, and employed Tailwind CSS to ensure the responsive design of the website.',
            'Leveraged Azure Functions, a serverless computing service, to efficiently manage backend logic. This approach significantly reduced costs (Azure pay-as-you-go subscription).',
            'Hosting React front-end app on Azure Web Apps supports continuous deployment (CI/CD) from GitHub.',
            'Used T-SQL (Transact-SQL) for schema design and queries and Azure SQL Database, based on the Microsoft SQL Server database engine for supproting transactional capabilities.'
        ]
    },
    {
        title: 'One movie – movie/TV show web application with TMDB API',
        descriptions: [
            'Empower users to browse a selection of movies and manage personalized watch lists. This sophisticated platform enhances user experience through integration with an external API, successfully driving increased engagement and interaction.',
            'Full-stack web application utilizing React.js and Next.js for efficient frontend interaction, integrated with Redux Toolkit for state management, and styled with Tailwind CSS for a responsive and contemporary user interface.',
            'Implemented Model View Controller (MVC) pattern structure.',
        ],
        githubLink: 'https://github.com/behnamsaba/one_movies',
        liveLink: 'https://onemovies-omega.vercel.app/',
        imageSrc: '/onemovie.png',
        imageAlt: 'one movie',
    },
    {
        title: 'Jobly – Indeed style clone web application',
        descriptions: [
            'Full stack app built using React, Express, and PostgreSQL with database querying capabilities.',
            'Implemented full user signup/login process with authorization/ authentication using JSON web tokens (JWT) and Bcrypt.',
            'Features search functions. Allows users to search companies and jobs.',
            'Incorporated unit and integration tests using the Super test library and Jest framework.',
        ],
        githubLink: 'https://github.com/behnamsaba/jobly-frontend',
        serverGithubLink: 'https://github.com/behnamsaba/jobly-backend',
        liveLink: 'https://jobly-frontend-ag2j.onrender.com/',
        imageSrc: '/job.png',
        imageAlt: 'job',
    },
    {
        title: 'R2D2 – CRM Prototype web application integrated with OpenAI API',
        descriptions: [
            'Multifeature prototype of R2D2 focusing on AI-driven market research, deal/customer suggestions, personalized email outreach, and CRM autofill.',
            "Developed Flask backend leveraged LangChain framework to communicate with OpenAI's API, React for front-end, redux toolkit for state management, and Tailwind CSS for UI.",
            'Client-side and server-side code hosted on separate repositories.',
        ],
        githubLink: 'https://github.com/behnamsaba/R2D2-Client-side',
        serverGithubLink: 'https://github.com/behnamsaba/R2D2-backend',
        liveLink: 'https://r2d2-prototype.onrender.com/',
        imageSrc: '/r2d2.png',
        imageAlt: 'r2d2 prototype',
    },
    {
        title: 'Time zone converter Chrome Extension',
        descriptions: [
            'As you browse the web, the Chrome extension plugin seamlessly detects times and converts them to your preferred time zone(s).',
            'Developed the Chrome extension using React.js, Webpack, Babel, and Tailwind CSS, focusing on performance and user experience.',
            'Utilized regular expressions to efficiently identify and extract time patterns in the DOM.',
        ],
        imageSrc: '/TZ.png',
        imageAlt: 'timezone converter',
    },
    {
        title: 'Flashcard – application for learning vocabulary with external API',
        descriptions: [
            'Designed and implemented a RESTful API using Flask and PostgreSQL, with SQLAlchemy for database integration, Bcrypt for authentication.',
            'Used Flask-Session to store user information.',
            'Serving as a powerful tool for users to enrich their English vocabulary.',
            'Implemented Jinja2 for frontend development, enhanced by HTML and Bootstrap.',
        ],
        githubLink: 'https://github.com/behnamsaba/dictionaryApi',
        liveLink: 'https://capstone-one-project.herokuapp.com/',
        imageSrc: '/vocab.png',
        imageAlt: 'vocab',
    },
];

// Main Projects component
const Projects = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <h2 className='bg-gray-50 text-center text-2xl font-bold mb-4'>
                PROJECTS
            </h2>
            <div className='bg-gray-50 p-6'>
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
