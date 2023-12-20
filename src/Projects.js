import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-4 m-4'>
            <div className='bg-gray-50 p-6'>
                <Link to='/projects'>
                    <h2 className='text-2xl font-bold mb-4'>Projects</h2>
                </Link>
            </div>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed'>
                    <li className='font-semibold'>
                        One movie – movie/TV show web application with TMDB API
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Full stack web app. Developed a dynamic web
                            application with React.js, Next.js, Redux Toolkit,
                            and Tailwind CSS.
                        </li>
                        <li>
                            Empower users to browse a selection of movies and
                            manage personalized watch lists. This sophisticated
                            platform enhances user experience through
                            integration with an external API, successfully
                            driving increased engagement and interaction.
                        </li>
                        <li>
                            Features server-side rendering for SEO optimization
                            and user authentication.
                        </li>
                        <li>
                            Implemented Model View Controller (MVC) pattern
                            structure.
                        </li>
                        <li className='flex items-center space-x-2'>
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

                    <li className='font-semibold mt-4'>
                    R2D2 – CRM Prototype web application for an AI company with OpenAI API
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                        Multifeature prototype of R2D2 focusing on AI-driven market research, deal/customer suggestions, personalized email outreach and CRM autofill.
                        </li>
                        <li>
                        Developed Flask backend leveraged LangChain framework to communicate with OpenAI's API, React for front-end, redux toolkit for state management, and Tailwind CSS for UI.
                        </li>
                        <li className='flex items-center space-x-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/R2D2-Client-side'
                                className='text-blue-500 underline hover:text-blue-700'>
                                Client-side |
                                https://github.com/behnamsaba/R2D2-Client-side
                            </Link>
                        </li>
                        <li className='flex items-center space-x-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/R2D2-backend'
                                className='text-blue-500 underline hover:text-blue-700'>
                                Server-side |
                                https://github.com/behnamsaba/R2D2-backend
                            </Link>
                        </li>
                    </ul>
                    <li className='font-semibold mt-4'>
                        Jobly – Indeed style clone web application
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Full stack app built using React, Node/ Express, and
                            PostgreSQL with database querying capabilities.
                        </li>
                        <li>
                            Implemented full user signup/login process with
                            authorization/ authentication using JSON web tokens
                            (JWT) and Bcrypt.
                        </li>
                        <li>
                            Features search functions. Allows users to search
                            companies and jobs.
                        </li>
                        <li>
                            Incorporated unit and integration tests using the
                            Super test library and Jest framework.
                        </li>
                        <li className='flex items-center space-x-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/jobly-frontend'
                                className='text-blue-500 underline hover:text-blue-700'>
                                Client-side |
                                https://github.com/behnamsaba/jobly-frontend
                            </Link>
                        </li>
                        <li className='flex items-center space-x-2'>
                            <AiOutlineGithub
                                size={25}
                                className='text-blue-500'
                            />
                            <Link
                                to='https://github.com/behnamsaba/jobly-backend'
                                className='text-blue-500 underline hover:text-blue-700'>
                                Server-side |
                                https://github.com/behnamsaba/jobly-backend
                            </Link>
                        </li>
                    </ul>

                    <li className='font-semibold mt-4'>
                        Flashcard – application for learning vocabulary with
                        external API
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            RESTful API using Flask, PostgreSQL, SQL Alchemy,
                            HTML, and Bootstrap, implemented authentication/
                            authorization using Bcrypt.
                        </li>
                        <li>Uses Flask-Session to store user information.</li>
                        <li>
                            Serving as a powerful tool for users to enrich their
                            English vocabulary.
                        </li>
                        <li className='flex items-center space-x-2'>
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
