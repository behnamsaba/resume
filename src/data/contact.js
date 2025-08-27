import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneVolume, FaFilePdf } from 'react-icons/fa';

// Centralized contact info
const contactInfo = [
  { icon: RiContactsFill, size: 50, text: 'Contact', isHeader: true },
  { text: 'Behnam Saba' },
  { text: 'Full Stack Software Engineer' },
  { text: 'Los Angeles, CA' },
  { text: 'US Permanent Resident' },
  { icon: FaPhoneVolume, size: 25, text: '949-993-6727', link: 'tel:+19499936727' },
  {
    icon: FaFilePdf,
    size: 25,
    text: 'Get My Resume in PDF',
    link: 'https://www.dropbox.com/scl/fi/j505cuz7fdym1wovonjh7/Ben_saba.pdf?rlkey=jwdgeulqa0jl2jic3k983l6dj&st=mnlxg57z&dl=0',
    iconColor: 'text-red-500',
  },
  {
    icon: MdOutlineMailOutline,
    size: 25,
    text: 'Ben.saba.dev@gmail.com',
    link: 'mailto:ben.saba.dev@gmail.com',
    iconColor: 'text-green-600',
  },
  {
    icon: AiFillLinkedin,
    size: 25,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ben-saba/',
    iconColor: 'text-blue-500',
  },
  {
    icon: AiOutlineGithub,
    size: 25,
    text: 'GitHub',
    link: 'https://github.com/ben-saba',
    iconColor: 'text-black',
  },
];

export { contactInfo };
