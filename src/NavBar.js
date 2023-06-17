import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='flex flex-wrap justify-between items-center bg-gray-900 p-4 md:px-12'>
      <div className='flex justify-center w-full md:w-auto'>
        <img src='/logo.png' alt='Logo' className='w-20 md:w-32 h-auto' />
      </div>
      <div className='flex flex-wrap justify-around w-full md:w-auto mt-4 md:mt-0'>
        <NavLink
          className={({ isActive }) =>
            "text-gray-300 mx-2 md:mx-4 hover:text-white text-sm md:text-base" +
            (isActive ? " border-b-2 border-blue-500 pb-1" : "")
          }
          end={true}
          to='/'>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-gray-300 mx-2 md:mx-4 hover:text-white text-sm md:text-base" +
            (isActive ? " border-b-2 border-blue-500 pb-1" : "")
          }
          to='/projects'>
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-gray-300 mx-2 md:mx-4 hover:text-white text-sm md:text-base" +
            (isActive ? " border-b-2 border-blue-500 pb-1" : "")
          }
          to='/experience'>
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-gray-300 mx-2 md:mx-4 hover:text-white text-sm md:text-base" +
            (isActive ? " border-b-2 border-blue-500 pb-1" : "")
          }
          to='/education'>
          Education
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-gray-300 mx-2 md:mx-4 hover:text-white text-sm md:text-base" +
            (isActive ? " border-b-2 border-blue-500 pb-1" : "")
          }
          to='/skills'>
          Skills
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
