import { Link } from 'react-router-dom';
const Education = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-4 m-4'>
            <div className='bg-gray-50 p-6'>
                <Link to='/experience'>
                    <h2 className='text-2xl font-bold mb-4'>
                        Education and Experience
                    </h2>
                </Link>
            </div>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed'>
                    <li className='font-semibold'>
                        Microsoft Azure Fundamentals– Microsoft
                    </li>
                    <p>July 2023 – Present</p>
                    <li className='font-semibold'>
                        Full-Stack Software Engineering Program Certificate–
                        Springboard, San Francisco
                    </li>
                    <p>September 2022 – June 2023</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Intensive program with comprehensive hands-on
                            coursework covering front-end, and back-end web
                            development, and coding.
                        </li>
                        <li>
                            Developed and tested real-world web applications
                            under the guidance of industry experts.
                        </li>
                        <li>
                            Completed a 700+ hour full-stack course,
                            encompassing all facets of web development, and
                            produced, refactor, and implemented code for 114+
                            projects and web applications.
                        </li>
                        <li>
                            Stayed updated on current web technologies and
                            practices through ongoing education and workshops.
                        </li>
                        <li>
                            Researched and selected alternative web technologies
                            for personal projects.
                        </li>
                    </ul>
                    <li className='font-semibold'>
                        Bachelor of Science – Industrial Engineering, Azad
                        University
                    </li>
                    <p>October 2011– February 2016</p>
                    <li className='font-semibold'>
                        Certificate: Word, Excel, PowerPoint, Access, Java,
                        Python – Tehran Institute of Technology
                    </li>
                    <p>October 2018 – February 2021</p>
                </ul>
            </div>
        </div>
    );
};

export default Education;
