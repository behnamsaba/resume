import React from 'react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneVolume, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const contactInfo = [
    { icon: RiContactsFill, size: 50, text: 'Contact', isHeader: true },
    { text: 'Behnam Saba' },
    { text: 'Full Stack Software Engineer' },
    { text: 'Los Angeles, CA' },
    { text: 'US Permanent Resident' },
    { icon: FaPhoneVolume, size: 25, text: '949-993-6727', link: '' },
    {
        icon: FaFilePdf,
        size: 25,
        text: 'Get My Resume in PDF',
        link: 'https://www.dropbox.com/scl/fi/kgoh2z7wc5vrz5v72chue/Behnam_Saba.pdf?rlkey=9eex637a0v8clvyiwxzqvfuu1&dl=0',
        iconColor: 'text-red-500',
    },
    {
        icon: MdOutlineMailOutline,
        size: 25,
        text: 'Behnams71@gmail.com',
        link: ' ',
        iconColor: 'text-green-600',
    },
    {
        icon: AiFillLinkedin,
        size: 25,
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/behnam-saba-979915134',
        iconColor: 'text-blue-500',
    },
    {
        icon: AiOutlineGithub,
        size: 25,
        text: 'GitHub',
        link: 'https://github.com/behnamsaba',
        iconColor: 'text-black',
    },
];

const ContactItem = ({ icon: Icon, size, text, link, iconColor, isHeader }) => {
    const className = isHeader ? 'text-2xl font-bold mb-1' : 'font-semibold';
    return (
        <li className='flex items-center space-x-2 px-2 py-2'>
            {Icon && (
                <Icon
                    size={size}
                    className={iconColor || 'text-gray-500'}
                />
            )}
            {link ? (
                <Link
                    to={link}
                    className='text-blue-500 underline'>
                    {text}
                </Link>
            ) : (
                <p className={className}>{text}</p>
            )}
        </li>
    );
};

const General = () => {
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
                <ul className='text-gray-700 list-none dark:text-gray-400 text-justify'>
                    {contactInfo.map((item, index) => (
                        <ContactItem
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
                <h2 className='font-bold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50 text-center py-2'>
                    Summary
                </h2>
                <p className='hover:bg-blue-100 rounded-lg py-2 px-2 text-justify'>
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
