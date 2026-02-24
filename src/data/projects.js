// Centralized project data
const projectData = [
    {
        title: 'Tapistro Platform',
        descriptions: [
            'Enhanced the front-end of the Tapistro app—an AI tool for GTM teams—by implementing a Figma-based design using React, React-Flow, and Material UI, resulting in a 25% increase in user engagement and operational efficiency.',
            'Conducted regular code reviews, achieving a 20% reduction in critical vulnerabilities and enhancing overall code quality across the project.',
            'Achieved 100% scores on accessibility, SEO, performance, and best practices by implementing automated audits with Lighthouse CLI, ensuring full compliance with WCAG 2.1 Level AA standards.'
        ],
        imageSrc: '/tapistro.png',
        imageAlt: 'Tapistro app',
    },
    {
        title: 'Benflow-AI Powered Visual Workflow Architect',
        descriptions: [
            'Built an AI-powered workflow generator using React, TypeScript, React Flow, and Vercel serverless, transforming natural-language goals into structured graph workflows.',
            'Integrated OpenAI with schema validation and fallback logic for reliable generation and export (Markdown/JSON).'
        ],
        liveLink: 'https://benflow-ai.vercel.app',
    },
    {
        title: 'LS Daily News Slack Chatbot',
        descriptions: [
            'Engineered the LS Daily News Bot, an end-to-end news delivery system on Slack using Python, AWS Lambda, AWS API Gateway, DynamoDB, and Bolt. The bot efficiently fetches daily updates from specified RSS feeds, keeping teams up to date with developments in the Life Sciences sector.',
            'Achieved a 36% cost reduction and enhanced system scalability by implementing event-driven microservices architecture, optimizing the delivery of critical news information directly to Slack channels.',
        ],
    },
    {
        title: 'Fashion e-Commerce website - (Under development)',
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
        title: 'Hypertire.com',
        descriptions: [
            'Developed responsive user interfaces using HTML5, CSS3, and JavaScript, resulting in 4,000+ monthly page views.',
            'Collaborated with designers and backend teams to create an e-commerce tire shop website featuring user registration, enhancing overall functionality and user experience',
            'Implemented Google Analytics to track visitor behavior and identify key engagement areas, leading to a 10% increase in organic traffic and higher engagement rates',
        ],
        liveLink: 'https://hypertire.com/',
        imageSrc: '/hypertire.png',
        imageAlt: 'hypertire',
    },
    {
        title: 'Galliot - Company Website',
        descriptions: [
            'Developed the main website for Galliot, integrating WordPress plugins for enhanced UI, AOS for animations, and lazy sizes for image optimization. This approach reduced bandwidth consumption by approximately 35% and improved load times by 15%.',
            'Integrated HubSpot chat to engage website visitors and enhance support, reducing resolution time for customer queries by up to 50%. This change increased engagement by 20% and improved customer support by reducing the need for emails by 50%',
            'Implemented Google Analytics to track visitor behavior, identify the most visited pages, and determine where visitors spend the most time. This led to a 10% increase in organic traffic and higher engagement rates.',
        ],
        liveLink: 'https://galliot.us/',
        imageSrc: '/galliot.png',
        imageAlt: 'galliot',
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
        imageSrc: '/vocab.png',
        imageAlt: 'vocab',
    },
];

export { projectData };

