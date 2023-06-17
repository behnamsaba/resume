import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-4 m-4'>
            <div className='bg-gray-50 p-6'>
                <Link to='/experience'>
                    <h2 className='text-2xl font-bold mb-4'>Skills</h2>
                </Link>
            </div>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed'>
                    <li className='font-semibold'>General</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>Object Oriented Programming</li>
                        <li>Front-end development</li>
                        <li>Back-end development</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                        <li>GitHub/Git</li>
                        <li>Linux</li>
                        <li>REST APIs</li>
                        <li>Unit Testing</li>
                        <li>Jest</li>
                        <li>Integration Testing</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <li className='font-semibold'>Languages</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>SQL</li>
                    </ul>
                    <li className='font-semibold'>Front-End</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>JQuery</li>
                        <li>DOM</li>
                        <li>React.js</li>
                        <li>React Router</li>
                        <li>Redux</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                    </ul>
                    <li className='font-semibold'>Back-End</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>Next.js</li>
                        <li>Flask</li>
                        <li>Express.js</li>
                    </ul>
                    <li className='font-semibold'>Database</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>PostgreSQL</li>
                        <li>MongoDb</li>
                        <li>SQLAlchemy</li>
                        <li>Schema Design</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
