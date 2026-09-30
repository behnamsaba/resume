import {
    SiBabel,
    SiExpress,
    SiFlask,
    SiGoogleanalytics,
    SiHtml5,
    SiHubspot,
    SiJavascript,
    SiJest,
    SiJsonwebtokens,
    SiLangchain,
    SiMui,
    SiNextdotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiRedux,
    SiSqlalchemy,
    SiTailwindcss,
    SiThemoviedatabase,
    SiTypescript,
    SiVercel,
    SiWebpack,
    SiWordpress,
} from 'react-icons/si';
import { FaAws, FaCss3Alt, FaSlack } from 'react-icons/fa';
import { TbBrandAzure, TbBrandOpenai } from 'react-icons/tb';

// Brand icon and color for each technology; unknown names render as text-only badges
const techIcons = {
    'React': { icon: SiReact, color: 'text-sky-500' },
    'React Flow': { icon: SiReact, color: 'text-pink-500' },
    'TypeScript': { icon: SiTypescript, color: 'text-blue-600' },
    'JavaScript': { icon: SiJavascript, color: 'text-yellow-500' },
    'HTML5': { icon: SiHtml5, color: 'text-orange-600' },
    'CSS3': { icon: FaCss3Alt, color: 'text-blue-500' },
    'Next.js': { icon: SiNextdotjs, color: 'text-slate-900 dark:text-white' },
    'Redux Toolkit': { icon: SiRedux, color: 'text-purple-600' },
    'Tailwind CSS': { icon: SiTailwindcss, color: 'text-cyan-500' },
    'Material UI': { icon: SiMui, color: 'text-blue-500' },
    'Python': { icon: SiPython, color: 'text-blue-500' },
    'Flask': { icon: SiFlask, color: 'text-slate-900 dark:text-white' },
    'Express': { icon: SiExpress, color: 'text-slate-900 dark:text-white' },
    'PostgreSQL': { icon: SiPostgresql, color: 'text-sky-700' },
    'SQLAlchemy': { icon: SiSqlalchemy, color: 'text-red-700' },
    'JWT': { icon: SiJsonwebtokens, color: 'text-pink-600' },
    'Jest': { icon: SiJest, color: 'text-red-700' },
    'OpenAI API': { icon: TbBrandOpenai, color: 'text-emerald-600' },
    'LangChain': { icon: SiLangchain, color: 'text-teal-600' },
    'Vercel Serverless': { icon: SiVercel, color: 'text-slate-900 dark:text-white' },
    'AWS Lambda': { icon: FaAws, color: 'text-orange-500' },
    'AWS API Gateway': { icon: FaAws, color: 'text-orange-500' },
    'DynamoDB': { icon: FaAws, color: 'text-orange-500' },
    'Azure Functions': { icon: TbBrandAzure, color: 'text-sky-600' },
    'Azure SQL Database': { icon: TbBrandAzure, color: 'text-sky-600' },
    'Slack Bolt': { icon: FaSlack, color: 'text-purple-700' },
    'TMDB API': { icon: SiThemoviedatabase, color: 'text-teal-500' },
    'Webpack': { icon: SiWebpack, color: 'text-sky-500' },
    'Babel': { icon: SiBabel, color: 'text-yellow-500' },
    'WordPress': { icon: SiWordpress, color: 'text-sky-800 dark:text-sky-400' },
    'HubSpot': { icon: SiHubspot, color: 'text-orange-500' },
    'Google Analytics': { icon: SiGoogleanalytics, color: 'text-amber-500' },
};

const TechBadge = ({ name }) => {
    const { icon: Icon, color } = techIcons[name] || {};
    return (
        <li className='inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200'>
            {Icon && <Icon size={14} className={color} aria-hidden='true' />}
            {name}
        </li>
    );
};

export default TechBadge;
