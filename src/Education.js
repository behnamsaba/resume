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
                        Full-Stack Software Engineering Program Certificate–
                        Springboard, San Francisco
                    </li>
                    <p>September 2022 – June 2023</p>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>
                            Completed a 700+ hour full stack course covering the
                            fundamental aspects of front-end and back-end web
                            development.
                        </li>
                        <li>
                            Produced, completed, and refactored code for 114+
                            [sprint] projects/ web applications/ assignments.
                        </li>
                        <li>
                            Developed databases that supported project web
                            applications and implemented performance
                            improvements.
                        </li>
                        <li>
                            Maintained understanding of current web
                            technologies, frameworks, and programming practices
                            through continuing education and participating in
                            workshops.
                        </li>
                        <li>
                            Researched, documented, and selected alternative web
                            architectures and technologies for personal
                            projects.
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
