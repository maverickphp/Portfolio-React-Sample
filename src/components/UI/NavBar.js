
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../UI/Images/logo.png";
function NavBar() {
  return (
    <div className="nav">
    <nav className=' border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-900'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src={logo} className='h-1 mr-1 sm:h-9' alt='Flowbite Logo' />
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-red-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-red-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
            <li>
              <Link
                to='/'
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:hover:text-black"
                aria-current='page'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Education
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Experience
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
