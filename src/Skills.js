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
                    <li className='font-semibold'>Programming Languages</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>Java (Basic)</li>
                    </ul>
                    <li className='font-semibold'>Front-end Development</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Redux Toolkit</li>
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                    </ul>
                    <li className='font-semibold'>Back-end Development</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>Flask</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>Redis</li>
                    </ul>
                    <li className='font-semibold'>Database:</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>SQLALchemy</li>
                        <li>MongoDb</li>
                        <li>Schema Design</li>
                    </ul>
                    <li className='font-semibold'>Testing</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>Unit Testing</li>
                        <li>Integration testing</li>
                        <li>Jest</li>
                        <li>Jasmine</li>
                    </ul>
                    <li className='font-semibold'>Additional Technologies</li>
                    <ul className='list-disc list-inside space-y-2 pl-5'>
                        <li>REST APIs</li>
                        <li>Data Structures</li>
                        <li>Jest</li>
                        <li>Algorithms</li>
                        <li>LangChain</li>
                        <li>OpenAI API</li>
                        <li>Large Language Model</li>
                        <li>Heroku (PaaS built on top of AWS)</li>
                        <li>GitHub/Git</li>
                        <li>Linux</li>
                        <li>Microsoft365</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
