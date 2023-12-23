import { AiOutlineGithub } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';

import { Link } from 'react-router-dom';

const Projects = () => {
    const projectTitle =
        'font-semibold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50 text-center';
    const projectExplain =
        'mt-1 text-gray-500 dark:text-gray-400 hover:bg-blue-100 rounded-lg py-2 px-2';
    const githubItem = 'flex items-center space-x-2 px-2 py-2';
    const card = 'flex flex-col bg-white border shadow-sm rounded-xl'

    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <h2 className='bg-gray-50 text-center text-2xl font-bold mb-4'>
                PROJECTS
            </h2>
            <div className='bg-gray-50 p-6'>
                <div class={card}>
                    <img
                        class='w-full h-auto rounded-t-xl'
                        src='/onemovie.png'
                        alt='one movie'
                    />
                    <div class='p-4 md:p-5'>
                        <h3 className={projectTitle}>
                            One movie – movie/TV show web application with TMDB
                            API
                        </h3>
                        <p className={projectExplain}>
                            Empower users to browse a selection of movies and
                            manage personalized watch lists. This sophisticated
                            platform enhances user experience through
                            integration with an external API, successfully
                            driving increased engagement and interaction.
                        </p>
                        <p className={projectExplain}>
                            Full-stack web application utilizing React.js and
                            Next.js for efficient frontend interaction,
                            integrated with Redux Toolkit for state management,
                            and styled with Tailwind CSS for a responsive and
                            contemporary user interface.
                        </p>
                        <p className={projectExplain}>
                            Implemented Model View Controller (MVC) pattern
                            structure.
                        </p>
                        <p className={githubItem}>
                            <AiOutlineGithub
                                size={25}
                                className='text-black-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/one_movies'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                GitHub
                            </Link>
                        </p>
                        <p className={githubItem}>
                            <CgMediaLive
                                size={25}
                                className='text-red-500'
                            />
                            <Link
                                to='https://onemovies-omega.vercel.app/'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Live Version
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={card}>
                    <img
                        class='w-full h-auto rounded-t-xl'
                        src='/r2d2.png'
                        alt='r2d2 prototype'
                    />
                    <div class='p-4 md:p-5'>
                        <h3 className={projectTitle}>
                            R2D2 – CRM Prototype web application integrated with
                            OpenAI API
                        </h3>
                        <p className={projectExplain}>
                            Multifeature prototype of R2D2 focusing on AI-driven
                            market research, deal/customer suggestions,
                            personalized email outreach, and CRM autofill.
                        </p>
                        <p className={projectExplain}>
                            Developed Flask backend leveraged LangChain
                            framework to communicate with OpenAI's API, React
                            for front-end, redux toolkit for state management,
                            and Tailwind CSS for UI.
                        </p>
                        <p className={githubItem}>
                            <AiOutlineGithub
                                size={25}
                                className='text-black-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/R2D2-Client-side'
                                className='text-blue-500 no-derline hover:text-blue-700'>
                                Client-side GitHub
                            </Link>
                        </p>
                        <p className={githubItem}>
                            <AiOutlineGithub
                                size={25}
                                className='text-black-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/R2D2-backend'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Server-side GitHub
                            </Link>
                        </p>
                        <p className={githubItem}>
                            <CgMediaLive
                                size={25}
                                className='text-red-500'
                            />
                            <Link
                                to='https://r2d2-prototype.onrender.com/'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Live Version
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={card}>
                    <img
                        class='w-full h-auto rounded-t-xl'
                        src='/job.png'
                        alt='job'
                    />
                    <div class='p-4 md:p-5'>
                        <h3 className={projectTitle}>
                            Jobly – Indeed style clone web application
                        </h3>
                        <p className={projectExplain}>
                            Full stack app built using React, Express, and
                            PostgreSQL with database querying capabilities.
                        </p>
                        <p className={projectExplain}>
                            Implemented full user signup/login process with
                            authorization/ authentication using JSON web tokens
                            (JWT) and Bcrypt.
                        </p>
                        <p className={projectExplain}>
                            Features search functions. Allows users to search
                            companies and jobs.
                        </p>
                        <p className={projectExplain}>
                            {' '}
                            Incorporated unit and integration tests using the
                            Super test library and Jest framework.
                        </p>
                        <p className={githubItem}>
                            <AiOutlineGithub
                                size={25}
                                className='text-black-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/jobly-frontend'
                                className='text-blue-500 no-derline hover:text-blue-700'>
                                Client-side GitHub
                            </Link>
                        </p>
                        <p className={githubItem}>
                            <AiOutlineGithub
                                size={25}
                                className='text-black-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/jobly-backend'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Server-side GitHub
                            </Link>
                        </p>
                        <p className={githubItem}>
                            <CgMediaLive
                                size={25}
                                className='text-red-500'
                            />
                            <Link
                                to='https://equal-frog.surge.sh/'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Live Version
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={card}>
                    <img
                        class='w-full h-auto rounded-t-xl'
                        src='/vocab.png'
                        alt='vocab'
                    />
                    <div class='p-4 md:p-5'>
                        <h3 className={projectTitle}>
                            Flashcard – application for learning vocabulary with
                            external API
                        </h3>
                        <p className={projectExplain}>
                            Designed and implemented a RESTful API using Flask
                            and PostgreSQL, with SQLAlchemy for database
                            integration, Bcrypt for authentication.
                        </p>
                        <p className={projectExplain}>
                            Used Flask-Session to store user information.
                        </p>
                        <p className={projectExplain}>
                            Serving as a powerful tool for users to enrich their
                            English vocabulary.
                        </p>
                        <p className={projectExplain}>
                            Implemented Jinja2 for frontend development,
                            enhanced by HTML and Bootstrap.
                        </p>
                        <p className={githubItem}>
                            <AiOutlineGithub
                                size={25}
                                className='text-black-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/dictionaryApi'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                GitHub
                            </Link>
                        </p>
                        <p className={githubItem}>
                            <CgMediaLive
                                size={25}
                                className='text-red-500'
                            />
                            <Link
                                to='https://capstone-one-project.herokuapp.com/'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Live Version
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
