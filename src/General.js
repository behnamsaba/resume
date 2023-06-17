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
                    Proactive Full Stack developer. Seeking a collaborative
                    environment to learn from industry experts and contribute to
                    the team's success. Detail-oriented team player with strong
                    organizational skills. Ability to handle multiple projects
                    simultaneously with a high degree of accuracy. Self-taught
                    with formal training from Springboard Software Engineer
                    Bootcamp. Committed to staying updated on industry trends.
                    Strong background in cross-functional teamwork. Known for
                    consistent performance and delivering impactful results.
                </p>
            </div>
        </div>
    );
};

export default General;
