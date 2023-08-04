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
                        Full Stack Developer (Contract) – Galliot, San
                        Francisco, CA
                    </li>
                    <p>Jan 2022 – Present</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Developed responsive and user-friendly interfaces using React ensuring optimal user experience.
                        </li>
                        <li>
                        Architected and engineered robust backend solutions using Node, Flask, and Next.js, specializing in data management with PostgreSQL and MongoDB databases.
                        </li>
                        <li>
                        Developed RESTful APIs for seamless data interchange between the front-end and back-end. Integrated third-party APIs to enhance application features and functionality.
                        </li>
                    </ul>
                    <li className='font-semibold'>
                        Project Management Associate – KCE
                    </li>
                    <p>October 2018 – February 2021</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Efficiently completed the Sangan Iron Ore project by
                            effectively coordinating with multiple contractors
                            to track documents, requisitions, meetings.
                        </li>
                    </ul>
                    <li className='font-semibold'>
                        Market Research Analyst – KCE
                    </li>
                    <p>October 2018 – February 2021</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Led a team of six analysts in producing influential
                            monthly and quarterly reports on commodities
                            outlook, providing valuable market Insights.
                        </li>
                    </ul>
                    <li className='font-semibold'>
                        Sales Associate – Rexroth Ag
                    </li>
                    <p>May 2018 – September 2018</p>
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
