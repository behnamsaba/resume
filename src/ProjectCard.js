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
    <div className='group flex flex-col bg-white dark:bg-slate-900 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden hover:shadow-md transition-shadow'>
        {imageSrc && (
            <div className='w-full aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800'>
                <img
                    className='w-full h-full object-cover'
                    src={imageSrc}
                    alt={imageAlt || title}
                />
            </div>
        )}
        <div className='p-4 md:p-5'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 text-center border-b border-slate-200 dark:border-slate-700 pb-2'>
                {title}
            </h3>
            {descriptions.map((desc, index) => (
                <p
                    key={index}
                    className='mt-2 text-sm text-slate-700 dark:text-slate-300 rounded-md px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-justify'>
                    {desc}
                </p>
            ))}
            {githubLink && (
                <div className='flex items-center gap-2 px-2 py-2'>
                    <AiOutlineGithub size={24} className='text-slate-800 dark:text-white dark:drop-shadow' />
                    <a href={githubLink} target='_blank' rel='noreferrer'>
                        {serverGithubLink ? 'Client-side GitHub' : 'GitHub'}
                    </a>
                </div>
            )}
            {serverGithubLink && (
                <div className='flex items-center gap-2 px-2 py-2'>
                    <AiOutlineGithub size={24} className='text-slate-800 dark:text-white dark:drop-shadow' />
                    <a href={serverGithubLink} target='_blank' rel='noreferrer'>
                        Server-side GitHub
                    </a>
                </div>
            )}
            {liveLink && (
                <div className='flex items-center gap-2 px-2 py-2'>
                    <CgMediaLive size={22} className='text-red-500' />
                    <a href={liveLink} target='_blank' rel='noreferrer'>
                        Live Version
                    </a>
                </div>
            )}
        </div>
    </div>
);

export default ProjectCard;
