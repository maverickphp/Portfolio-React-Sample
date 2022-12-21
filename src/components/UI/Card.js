/** @format */

import picture from "../UI/Images/picture.png";

function Card() {
  return (
    <div className='flex flex-row'>
      <div className='p-5 mr-auto'>
        <a href='/'>
          <h5 className='mb-4 text-4xl font-bold tracking-tight text-red-700 dark:text-red'>
            Welcome!
          </h5>
        </a>
        <p className='mb-4 font-normal text-black-700 dark:text-black-400'>
          A Front-End Developer | FreeLancer
        </p>
        <a
          href='/'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-blue-800'>
          Resume
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'></path>
          </svg>
        </a>
        <div className='object-right rounded-lg max-w-smborder-gray-200'></div>
      </div>
      <img className='ml-auto rounded-full mr-[14%]' src={picture} alt='' />
    </div>
  );
}

export default Card;
