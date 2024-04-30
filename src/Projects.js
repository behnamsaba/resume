import React from 'react';
import ProjectCard from './ProjectCard';

// Data structure for project information
const projectData = [
    {
        title: 'LS Daily News Slack Chatbot',
        descriptions: [
            'Engineered the LS Daily News Bot, an end-to-end news delivery system on Slack using Python, AWS Lambda, AWS API Gateway, DynamoDB, and Bolt. The bot efficiently fetches daily updates from specified RSS feeds, keeping teams up to date with developments in the Life Sciences sector.',
            'Achieved a 36% cost reduction and enhanced system scalability by implementing event-driven microservices architecture, optimizing the delivery of critical news information directly to Slack channels.',
        ],
    },
    {
        title: 'Fashion e-Commerce website',
        descriptions: [
            'Developed an e-commerce website using TypeScript with a serverless backend via Azure Functions, integrating React for dynamic frontend interactions. Employed Azure cloud services for scalability and enabled continuous deployment from GitHub, enhancing site functionality with Redux Toolkit and responsive design through Tailwind CSS.',
            "Achieved a 45% cost reduction by utilizing Azure's pay-as-you-go model for efficient serverless backend management, improving scalability and cost-effectiveness. ",
            'Designed and managed the database schema using T-SQL and hosted it on Azure SQL Database, which provides full transactional support based on the Microsoft SQL Server engine, ensuring reliable data operations.',
        ],
    },
    {
        title: 'One movie – movie/TV show web application with TMDB API',
        descriptions: [
            'Developed a full-stack web application using React.js and Next.js, enhancing UI efficiency through reusable components and server-side rendering, which improved SEO performance. Integrated with Redux Toolkit for state management and styled using Tailwind CSS for a responsive, modern interface.',
            'Designed and implemented a PostgreSQL database schema, facilitating full CRUD operations for user registration, login, updates, and the creation of personalized movie/TV series playlists, ensuring a seamless user experience.',
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
            'Developed an artificial intelligence CRM prototype that optimized market research and customer interaction, accelerating decision-making and significantly improving experiences for both customers and employees.',
            "Created a Flask backend using Python and integrated the LangChain framework to utilize OpenAI's API, paired with React for a dynamic front-end, ensuring seamless communication and user interaction.",
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
            'Updated the time zone converter Chrome extension with React.js, Webpack, Babel, and Tailwind CSS to detect and convert webpage times to preferred time zones, boosting remote team collaboration and reducing errors by 19%.',
            'Utilized Regular Expressions to efficiently identify and extract time patterns in the DOM, results in less false time detection.',
        ],
        imageSrc: '/TZ.png',
        imageAlt: 'timezone converter',
    },
    {
        title: 'Flashcard – application for learning vocabulary with external API',
        descriptions: [
            "Created a Flask backend using Python and integrated the LangChain framework to utilize OpenAI's API, paired with React for a dynamic front-end, ensuring seamless communication and user interaction.",
            'Designed and implemented a RESTful API with Flask and PostgreSQL, incorporating SQLAlchemy for database integration and Bcrypt for secure user authentication.',
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
