import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FaFilePdf } from 'react-icons/fa';
import { EVENTS } from '../analytics';

// Centralized contact info
const contactInfo = [
  { icon: RiContactsFill, size: 50, text: 'Contact', isHeader: true },
  { text: 'Behnam Saba' },
  { text: 'Full Stack Software Engineer' },
  { text: 'Los Angeles, CA' },
  { text: 'US Permanent Resident' },
  {
    icon: FaFilePdf,
    size: 25,
    text: 'Get My Resume in PDF',
    link: 'https://www.dropbox.com/scl/fi/l4x83dwjcmqutrvqljqhz/Ben_R.pdf?rlkey=c752l7nom41aaa4hcdyasaftt&st=z9szt9v3&dl=0',
    iconColor: 'text-red-500',
    event: EVENTS.resumePdf,
  },
  {
    icon: MdOutlineMailOutline,
    size: 25,
    text: 'ben@bensaba.dev',
    link: 'mailto:ben@bensaba.dev',
    iconColor: 'text-green-600',
    event: EVENTS.email,
  },
  {
    icon: AiFillLinkedin,
    size: 25,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ben-saba/',
    iconColor: 'text-blue-500',
    event: EVENTS.linkedin,
  },
  {
    icon: AiOutlineGithub,
    size: 25,
    text: 'GitHub',
    link: 'https://github.com/ben-saba',
    iconColor: 'text-black',
    event: EVENTS.github,
  },
];

export { contactInfo };
