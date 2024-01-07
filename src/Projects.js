import React from 'react';
import ProjectCard from './ProjectCard';

// Data structure for project information
const projectData = [
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
        title: 'Jobly – Indeed style clone web application',
        descriptions: [
            'Full stack app built using React, Express, and PostgreSQL with database querying capabilities.',
            'Implemented full user signup/login process with authorization/ authentication using JSON web tokens (JWT) and Bcrypt.',
            'Features search functions. Allows users to search companies and jobs.',
            'Incorporated unit and integration tests using the Super test library and Jest framework.',
        ],
        githubLink: 'https://github.com/behnamsaba/jobly-frontend',
        serverGithubLink: 'https://github.com/behnamsaba/jobly-backend',
        liveLink: 'https://equal-frog.surge.sh/',
        imageSrc: '/job.png',
        imageAlt: 'job',
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
