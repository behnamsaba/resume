import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneVolume } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const General = () => {
    const firstItem = 'flex items-center space-x-2 px-2 py-2';
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <div className='bg-gray-50 p-6'>
                <h1 className='text-black text-5xl font-bold mb-4'>Welcome!</h1>
                <p className='font-semibold flex items-center space-x-2 w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50 px-2 py-2'>
                    Hello, my name is Behnam Saba, and I am a Software Engineer
                    based in Los Angeles, California. You are viewing the
                    deployed version of my resume. Feel free to browse around,
                    and if you'd like to get in touch, all my contact details
                    are conveniently listed below. Looking forward to connecting
                    with you!
                </p>
                <ul className=' text-gray-700 list-none dark:text-gray-400 text-justify'>
                    <li className={firstItem}>
                        <RiContactsFill
                            size={50}
                            className='text-gray-700'
                        />
                        <h2 className='text-2xl font-bold mb-1'>Contact</h2>
                    </li>
                    <li className='font-semibold'>Behnam Saba</li>
                    <li className='font-semibold'>
                        Full Stack Software Engineer
                    </li>
                    <li className='font-semibold'>Los Angeles, CA</li>
                    <li className='font-semibold'>US Permanent Resident</li>
                    <li className='flex items-center space-x-2 px-2 py-2'>
                        <FaPhoneVolume
                            size={25}
                            className='text-gray-500'
                        />
                        <p className='text-black-500'>949-993-6727</p>
                    </li>
                    <li className='flex items-center space-x-2 px-2 py-2'>
                        <FaFilePdf
                            size={25}
                            className='text-red-500'
                        />
                        <Link
                            to='https://drive.google.com/file/d/12_hDSUh3-39OTcVfYxzd-3x4EaSWVJOP/view?usp=sharing'
                            className='text-blue-500 underline'>
                            Get My Resume in PDF
                        </Link>
                    </li>
                    <li className='flex items-center space-x-2 px-2 py-2'>
                        <MdOutlineMailOutline
                            size={25}
                            className='text-green-600'
                        />
                        <Link
                            to='mailto:behnams71@gmail.com'
                            className='text-blue-500 underline'>
                            Behnams71@gmail.com
                        </Link>
                    </li>
                    <li className='flex items-center space-x-2 px-2 py-2'>
                        <AiFillLinkedin
                            size={25}
                            className='text-blue-500'
                        />
                        <Link
                            to='https://www.linkedin.com/in/behnam-saba-979915134'
                            className='text-blue-500 underline'>
                            Linkedin
                        </Link>
                    </li>
                    <li className='flex items-center space-x-2 px-2 py-2'>
                        <AiOutlineGithub
                            size={25}
                            className='text-black-500'
                        />
                        <Link
                            to='https://github.com/behnamsaba'
                            className='text-blue-500 underline'>
                            GitHub
                        </Link>
                    </li>
                </ul>
                <h2 className='font-bold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50 text-center py-2'>
                    Summary
                </h2>
                <p className=' hover:bg-blue-100 rounded-lg py-2 px-2 text-justify'>
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
