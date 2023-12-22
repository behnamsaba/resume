import { Link } from 'react-router-dom';

const Skills = () => {
    const listItemStyle = 'text-base hover:bg-blue-100 rounded-lg px-2 py-2';
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <div className='bg-gray-50 text-center'>
                <Link to='/experience'>
                    <h2 className='text-2xl font-bold mb-4'>Skills</h2>
                </Link>
            </div>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Programming Languages
                    </li>
                    <ul className='grid grid-rows-2 grid-flow-col content-between'>
                        <li className={listItemStyle}>JavaScript</li>
                        <li className={listItemStyle}>TypeScript</li>
                        <li className={listItemStyle}>Python</li>
                        <li className={listItemStyle}>Java (Basic)</li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Front-end Development
                    </li>
                    <ul className='grid grid-rows-2 grid-flow-col content-between'>
                        <li className={listItemStyle}>React.js</li>
                        <li className={listItemStyle}>Next.js</li>
                        <li className={listItemStyle}>Redux Toolkit</li>
                        <li className={listItemStyle}>jQuery</li>
                        <li className={listItemStyle}>HTML</li>
                        <li className={listItemStyle}>CSS</li>
                        <li className={listItemStyle}>Tailwind CSS</li>
                        <li className={listItemStyle}>Bootstrap</li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Back-end Development
                    </li>
                    <ul className='grid grid-rows-2 grid-flow-col'>
                        <li className={listItemStyle}>Flask</li>
                        <li className={listItemStyle}>Express.js</li>
                        <li className={listItemStyle}>Node.js</li>
                        <li className={listItemStyle}>Redis</li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Database Knowledge
                    </li>
                    <ul className='grid grid-rows-2 grid-flow-col'>
                        <li className={listItemStyle}>SQL</li>
                        <li className={listItemStyle}>PostgreSQL</li>
                        <li className={listItemStyle}>SQLALchemy</li>
                        <li className={listItemStyle}>Schema Design</li>
                        <li className={listItemStyle}>MongoDb</li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Testing
                    </li>
                    <ul className='grid grid-rows-2 grid-flow-col content-between'>
                        <li className={listItemStyle}>Unit Testing</li>
                        <li className={listItemStyle}>Integration testing</li>
                        <li className={listItemStyle}>Jest</li>
                        <li className={listItemStyle}>Jasmine</li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Additional Technologies
                    </li>
                    <ul className='grid grid-rows-6 grid-flow-col content-between'>
                        <li className={listItemStyle}>Docker</li>
                        <li className={listItemStyle}>LangChain</li>
                        <li className={listItemStyle}>OpenAI API</li>
                        <li className={listItemStyle}>GitHub/Git</li>
                        <li className={listItemStyle}>Linux</li>
                        <li className={listItemStyle}>Microsoft365</li>
                        <li className={listItemStyle}>Algorithms</li>
                        <li className={listItemStyle}>REST APIs</li>
                        <li className={listItemStyle}>
                            Software Development Life Cycle
                        </li>
                        <li className={listItemStyle}>
                            Distributed Architecture
                        </li>
                        <li className={listItemStyle}>
                            Model-View-Controller (MVC)
                        </li>
                        <li className={listItemStyle}>
                            Event-Driven Architecture
                        </li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Cloud Skills
                    </li>
                    <ul className='grid grid-rows-4 grid-flow-col content-between'>
                        <li className={listItemStyle}>Serverless Computing</li>
                        <li className={listItemStyle}>Azure Functions</li>
                        <li className={listItemStyle}>Azure App Service</li>
                        <li className={listItemStyle}>Azure Storage</li>
                        <li className={listItemStyle}>Cosmos DB</li>
                        <li className={listItemStyle}>Virtual Machines</li>
                    </ul>
                    <li className='font-semibold hover:font-bold className="w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50"'>
                        Soft Skills
                    </li>
                    <ul className='grid grid-rows-1 grid-flow-col content-between'>
                        <li className={listItemStyle}>Collabration</li>
                        <li className={listItemStyle}>Problem-Solving</li>
                        <li className={listItemStyle}>Team-work</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
