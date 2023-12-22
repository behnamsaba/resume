import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Projects = () => {
    const listItem =
        'font-semibold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50';
    const secondItem = ' hover:bg-blue-100 rounded-lg py-2 px-2';
    const thirdItem = 'list-disc list-inside space-y-1 pl-1 text-justify';
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
          <h2 className=' bg-gray-50 text-center text-2xl font-bold mb-4'>PROJECTS</h2>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    <li className={listItem}>
                        One movie – movie/TV show web application with TMDB API
                    </li>
                    <ul className={thirdItem}>
                        <li className={secondItem}>
                            Empower users to browse a selection of movies and
                            manage personalized watch lists. This sophisticated
                            platform enhances user experience through
                            integration with an external API, successfully
                            driving increased engagement and interaction.
                        </li>
                        <li className={secondItem}>
                            Full-stack web application utilizing React.js and
                            Next.js for efficient frontend interaction,
                            integrated with Redux Toolkit for state management,
                            and styled with Tailwind CSS for a responsive and
                            contemporary user interface.
                        </li>
                        <li className={secondItem}>
                            Implemented Model View Controller (MVC) pattern
                            structure.
                        </li>
                        <li className='flex items-center space-x-2 px-2 py-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/one_movies'
                                className='text-blue-500 underline hover:text-blue-700'>
                                https://github.com/behnamsaba/one_movies
                            </Link>
                        </li>
                    </ul>

                    <li className={listItem}>
                        R2D2 – CRM Prototype web application for an AI company
                        with OpenAI API
                    </li>
                    <ul className={thirdItem}>
                        <li className={secondItem}>
                            Multifeature prototype of R2D2 focusing on AI-driven
                            market research, deal/customer suggestions,
                            personalized email outreach, and CRM autofill.
                        </li>
                        <li className={secondItem}>
                            Developed Flask backend leveraged LangChain
                            framework to communicate with OpenAI's API, React
                            for front-end, redux toolkit for state management,
                            and Tailwind CSS for UI.
                        </li>
                        <li className='flex items-center space-x-2 px-2 py-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/R2D2-Client-side'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Client-side |
                            </Link>
                            <Link
                                to='https://github.com/behnamsaba/R2D2-Client-side'
                                className='text-blue-500 underline hover:text-blue-700'>
                                https://github.com/behnamsaba/R2D2-Client-side
                            </Link>
                        </li>
                        <li className='flex items-center space-x-2 px-2 py-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/R2D2-backend'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Server-side |
                            </Link>
                            <Link
                                to='https://github.com/behnamsaba/R2D2-backend'
                                className='text-blue-500 underline hover:text-blue-700'>
                                https://github.com/behnamsaba/R2D2-backend
                            </Link>
                        </li>
                    </ul>
                    <li className={listItem}>
                        Jobly – Indeed style clone web application
                    </li>
                    <ul className={thirdItem}>
                        <li className={secondItem}>
                            Full stack app built using React, Express, and
                            PostgreSQL with database querying capabilities.
                        </li>
                        <li className={secondItem}>
                            Implemented full user signup/login process with
                            authorization/ authentication using JSON web tokens
                            (JWT) and Bcrypt.
                        </li>
                        <li className={secondItem}>
                            Features search functions. Allows users to search
                            companies and jobs.
                        </li>
                        <li className={secondItem}>
                            Incorporated unit and integration tests using the
                            Super test library and Jest framework.
                        </li>
                        <li className='flex items-center space-x-2 px-2 py-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/jobly-frontend'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Client-side |
                            </Link>
                            <Link
                                to='https://github.com/behnamsaba/jobly-frontend'
                                className='text-blue-500 underline hover:text-blue-700'>
                                https://github.com/behnamsaba/jobly-frontend
                            </Link>
                        </li>
                        <li className='flex items-center space-x-2 px-2 py-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/jobly-backend'
                                className='text-blue-500 no-underline hover:text-blue-700'>
                                Server-side |
                            </Link>
                            <Link
                                to='https://github.com/behnamsaba/jobly-backend'
                                className='text-blue-500 underline hover:text-blue-700'>
                                https://github.com/behnamsaba/jobly-backend
                            </Link>
                        </li>
                    </ul>

                    <li className={listItem}>
                        Flashcard – application for learning vocabulary with
                        external API
                    </li>
                    <ul className='list-disc list-inside space-y-1 pl-1'>
                        <li className={secondItem}>
                            Designed and implemented a RESTful API using Flask
                            and PostgreSQL, with SQLAlchemy for database
                            integration, Bcrypt for authentication.
                        </li>
                        <li className={secondItem}>
                            Used Flask-Session to store user information.
                        </li>
                        <li className={secondItem}>
                            Serving as a powerful tool for users to enrich their
                            English vocabulary.
                        </li>
                        <li className={secondItem}>
                            Implemented Jinja2 for frontend development,
                            enhanced by HTML and Bootstrap.
                        </li>
                        <li className='flex items-center space-x-2 px-2 py-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/dictionaryApi'
                                className='text-blue-500 underline hover:text-blue-700'>
                                https://github.com/behnamsaba/dictionaryApi
                            </Link>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Projects;
