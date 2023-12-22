import { Link } from 'react-router-dom';
const Experience = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <div className='bg-gray-50 text-center'>
                <Link to='/experience'>
                    <h2 className='text-2xl font-bold mb-4'>EXPERIENCE</h2>
                </Link>
            </div>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    <li className='font-semibold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50'>
                        Full Stack Developer – Galliot, San Francisco, CA{' '}
                        <p>(January 2023 - Present)</p>
                    </li>
                    <ul className=' text-gray-700 list-none dark:text-gray-400 text-justify'>
                        <li className='w-full border-b-2 hover:bg-blue-100 border-neutral-200 border-opacity-100 dark:border-opacity-50 rounded-lg py-2 px-2'>
                            Participated in all stages of Software Development
                            Life Cycle (SDLC), from requirement analysis and
                            application design to coding and testing, and
                            collaborated with product managers, designers, and
                            software engineers to ensure efficient development
                            and delivery of software solutions.
                        </li>
                        <li className='w-full border-b-2 hover:bg-blue-100 border-neutral-200 border-opacity-100 dark:border-opacity-50 rounded-lg py-2 px-2'>
                            Developed backend with Node, Flask, and Next.js,
                            utilized PostgreSQL and MongoDB, created RESTful
                            APIs, and integrated third-party APIs for front-end
                            enhancement.
                        </li>
                        <li className='w-full border-b-2 hover:bg-blue-100 border-neutral-200 border-opacity-100 dark:border-opacity-50 rounded-lg py-2 px-2'>
                            Developed responsive and user-friendly interfaces
                            using React ensuring optimal user experience.
                        </li>
                        <li className='w-full border-b-2 hover:bg-blue-100 border-neutral-200 border-opacity-100 dark:border-opacity-50 rounded-lg py-2 px-2'>
                            Developed backend with Node, Flask, and Next.js,
                            utilized PostgreSQL and MongoDB, created RESTful
                            APIs, and integrated third-party APIs for front-end
                            enhancement.
                        </li>
                        <li className=' hover:bg-blue-100 rounded-lg py-2 px-2'>
                            Developed and updated Chrome extension Manifest V3
                            with React and Webpack.
                        </li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Project Management Associate, Market Researcher – KCE
                        <p>(October 2018 - February 2021)</p>
                    </li>
                    <ul className=' text-gray-700 list-none dark:text-gray-400 text-justify'>
                        <li className='w-full border-b-2 hover:bg-blue-100 border-neutral-200 border-opacity-100 dark:border-opacity-50 rounded-lg py-2 px-2'>
                            Efficiently completed the Sangan Iron Ore project by
                            effectively coordinating with multiple contractors
                            to track documents, requisitions, meetings.
                        </li>
                        <li className=' hover:bg-blue-100 rounded-lg py-2 px-2'>
                            Led a team of six analysts in producing influential
                            monthly and quarterly reports on commodities
                            outlook, providing valuable market Insights.
                        </li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Sales Associate – Rexroth Ag
                        <p>(May 2018 – September 2018)</p>
                    </li>
                    <ul className=' text-gray-700 list-none dark:text-gray-400 text-justify'>
                        <li className=' hover:bg-blue-100 rounded-lg py-2 px-2'>
                            Prepare pricing proposals based on customer
                            requirements and vendors’ pricelists.
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
