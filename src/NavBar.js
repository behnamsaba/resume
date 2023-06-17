import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='flex justify-center bg-gray-900 p-4'>
      <img src='/logo.png' alt='Logo' className='h-14 w-25' />
      <NavLink
        className={({ isActive }) =>
          "text-gray-300 mx-4 hover:text-white" +
          (isActive ? " border-b-2 border-blue-500 pb-1" : "")
        }
        end={true}
        to='/'>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "text-gray-300 mx-4 hover:text-white" +
          (isActive ? " border-b-2 border-blue-500 pb-1" : "")
        }
        to='/projects'>
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "text-gray-300 mx-4 hover:text-white" +
          (isActive ? " border-b-2 border-blue-500 pb-1" : "")
        }
        to='/experience'>
        Experience
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "text-gray-300 mx-4 hover:text-white" +
          (isActive ? " border-b-2 border-blue-500 pb-1" : "")
        }
        to='/education'>
        Education
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "text-gray-300 mx-4 hover:text-white" +
          (isActive ? " border-b-2 border-blue-500 pb-1" : "")
        }
        to='/skills'>
        Skills
      </NavLink>
    </nav>
  );
};

export default NavBar;
