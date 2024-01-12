// Component for individual project card
import { AiOutlineGithub } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';

const ProjectCard = ({
    title,
    descriptions,
    githubLink,
    serverGithubLink,
    liveLink,
    imageSrc,
    imageAlt,
}) => (
    <div className='flex flex-col bg-white border shadow-sm rounded-xl'>
        <img
            className='w-full h-auto rounded-t-xl'
            src={imageSrc}
            alt={imageAlt}
        />
        <div className='p-4 md:p-5'>
            <h3 className='font-semibold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50 text-center'>
                {title}
            </h3>
            {descriptions.map((desc, index) => (
                <p
                    key={index}
                    className='mt-1 text-sm text-gray-500 dark:text-gray-400 hover:bg-blue-100 rounded-lg py-2 px-2 text-justify'>
                    {desc}
                </p>
            ))}
            <div className='flex items-center space-x-2 px-2 py-2'>
                <AiOutlineGithub
                    size={25}
                    className='text-black-500'
                />
                <a
                    href={githubLink}
                    target='_blank'
                    className='text-blue-500 no-underline hover:text-blue-700' rel="noreferrer">
                    {serverGithubLink ? 'Client-side GitHub' : 'GitHub'}
                </a>
            </div>
            {serverGithubLink && (
                <div className='flex items-center space-x-2 px-2 py-2'>
                    <AiOutlineGithub
                        size={25}
                        className='text-black-500'
                    />
                    <a
                        href={serverGithubLink}
                        target='_blank'
                        className='text-blue-500 no-underline hover:text-blue-700' rel="noreferrer">
                        Server-side GitHub
                    </a>
                </div>
            )}
            <div className='flex items-center space-x-2 px-2 py-2'>
                <CgMediaLive
                    size={25}
                    className='text-red-500'
                />
                <a
                    href={liveLink}
                    target='_blank'
                    className='text-blue-500 no-underline hover:text-blue-700' rel="noreferrer">
                    Live Version
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;
