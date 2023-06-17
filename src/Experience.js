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
                        Full Stack Developer Student – Springboard, San
                        Francisco, CA
                    </li>
                    <p>September 2022 – June 2023</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Intensive program with comprehensive hands-on
                            coursework covering front-end, and back-end web
                            development, and coding.
                        </li>
                        <li>
                            Developed and tested web applications under the
                            guidance of industry experts, enhancing proficiency
                            in programming languages and frameworks like
                            JavaScript, Python, React, and more.
                        </li>
                        <li>
                            Executed freelance projects to apply acquired skills
                            and knowledge effectively.
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
                        <li>
                            Conducted risk and return analysis using Comfar III.
                        </li>
                        
                    </ul>
                    <li className='font-semibold'>
                    Sales Associate – Rexroth Ag
                    </li>
                    <p>May 2018 – September 2018</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                          Prepare pricing proposals based on customer requirements and vendors’ pricelists.
                        </li>                        
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
