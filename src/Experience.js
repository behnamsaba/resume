import { Link } from 'react-router-dom';
const Experience = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-4 m-4'>
            <div className='bg-gray-50 p-6'>
                <Link to='/experience'>
                    <h2 className='text-2xl font-bold mb-4'>Experience</h2>
                </Link>
            </div>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed'>
                    <li className='font-semibold'>
                        Full Stack Developer – Galliot, San Francisco, CA {' '}
                        <b>(Jan 2023 - Present)</b>
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Developed responsive and user-friendly interfaces
                            using React ensuring optimal user experience.
                        </li>
                        <li>
                            Developed backend with Node, Flask, and Next.js,
                            utilized PostgreSQL and MongoDB, created RESTful
                            APIs, and integrated third-party APIs for front-end
                            enhancement.
                        </li>
                        <li>
                            Developed and updated Chrome extension Manifest V3
                            with React and Webpack.
                        </li>
                        <li>
                            Contributed to different phases of the Software
                            Development Life Cycle (SDLC).
                        </li>
                        <li>
                            Effectively collaborated to analyze and meet client
                            needs, delivering tailored software solutions.
                        </li>
                    </ul>
                    <li className='font-semibold'>
                        Project Management Associate, Market Researcher –
                        KCE <b>(October 2018 - February 2021)</b>
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Efficiently completed the Sangan Iron Ore project by
                            effectively coordinating with multiple contractors
                            to track documents, requisitions, meetings.
                        </li>
                        <li>
                            Led a team of six analysts in producing influential
                            monthly and quarterly reports on commodities
                            outlook, providing valuable market Insights.
                        </li>
                    </ul>
                    <li className='font-semibold'>
                        Sales Associate – Rexroth Ag{' '}
                        <b>(May 2018 – September 2018)</b>
                    </li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
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
