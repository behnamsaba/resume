import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const General = () => {
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-4 m-4'>
            <div className='bg-gray-50 p-6'>
                <h1 className='text-black text-5xl font-bold mb-4'>
                    Behnam Saba – Full Stack Software Engineer
                </h1>
                <ul className='list-none space-y-1 text-lg text-black'>
                    <li>Los Angeles, CA</li>
                    <li>949-993-6727</li>
                    <li>Behnams71@gmail.com</li>
                    <li>US Permanent Resident</li>
                    <li className='flex items-center space-x-2'>
                        <AiFillLinkedin
                            size={25}
                            className='text-blue-500'
                        />
                        <Link
                            to='https://www.linkedin.com/in/behnam-saba-979915134'
                            className='text-blue-500 underline'>
                            https://www.linkedin.com/in/behnam-saba-979915134
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='bg-gray-50 p-6'>
                <h2 className='text-2xl font-bold mb-4'>Summary</h2>
                <p className='text-gray-700 leading-relaxed'>
                    4 years of engineering experience in cross-functional teams,
                    including 1 year as a full-stack developer within a startup
                    environment. Well-versed in both front-end and back-end
                    technologies, including SQL, JavaScript, Python, and React.
                    Committed to staying up to date with the latest technology
                    trends and passionate about building projects, creating rich
                    user experiences, Cloud Services, and AI. Driven by
                    impactful missions and keen to join and contribute to a
                    dynamic, forward-thinking team.
                </p>
            </div>
        </div>
    );
};

export default General;
