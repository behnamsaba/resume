import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => (
    <NavLink
        className={({ isActive }) =>
            `text-gray-300 mx-2 md:mx-4 hover:text-white text-sm md:text-base${
                isActive ? ' border-b-2 border-blue-500 pb-1' : ''
            }`
        }
        end={to === '/'}
        to={to}>
        {children}
    </NavLink>
);

const NavBar = () => {
    return (
        <nav className='flex flex-wrap justify-between items-center bg-gray-900 p-4 md:px-12'>
            <div className='flex justify-center w-full md:w-auto'>
                <img
                    src='/logo.png'
                    alt='Logo'
                    className='w-20 md:w-32 h-auto'
                />
            </div>
            <div className='flex flex-wrap justify-around w-full md:w-auto mt-4 md:mt-0'>
                <NavItem to='/'>Home</NavItem>
                <NavItem to='/projects'>Projects</NavItem>
                <NavItem to='/experience'>Experience</NavItem>
                <NavItem to='/education'>Education</NavItem>
                <NavItem to='/skills'>Skills</NavItem>
            </div>
        </nav>
    );
};

export default NavBar;
