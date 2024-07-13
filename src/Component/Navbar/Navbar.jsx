// import React, { useState } from 'react';
// import logo from './logo.jpg';
// import './Navbar.css';
// import '../Home/Home.css'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <>
//     <nav className="bg-black border-b border-gray-200" id='navbg'>
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a href="/" className="">
//                 <img src={logo} alt='logo' className=' w-full h-14'/>
//             </a>
//           </div>
//           <div className="flex items-center">
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8" id='nav'>
//               <Link to="/" className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>Resume Score</Link>
//               <Link to="/" className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>AI Resume Builder</Link>
//               <Link to="/" className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>AI Resume Fetch</Link>
//               <Link to="/" className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>Resources</Link>
//               <Link to="/" target='_blank' className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>About Us</Link>
//               <Link to="/" target='_blank' className="text-white  px-3 py-2 rounded-md text-lg font-semibold" id='nav'>Blog</Link>
//               <Link to="/login" className="text-black px-2 py-2 text-lg font-semibold  rounded-xl " id='home_fourth'>Log in</Link>
//               <Link to="/signup" className="text-white  px-2 py-2 text-lg font-semibold border-2 rounded-xl" id='nav'>Sign up</Link>
//             </div>
//              <div className="flex sm:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               </button>
//             </div> 
//             {/* <div className="hidden sm:flex items-center">
//               {!isSearchOpen ? (
//                 <button
//                   onClick={() => setIsSearchOpen(true)}
//                   className="text-white  focus:outline-none px-3 py-2 rounded-md text-sm font-medium flex items-center"
//                 >
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.35 12.15z"></path>
//                   </svg>
//                   Search
//                 </button>
//               ) : (
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="block w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               )}
//             </div> */}
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="/" className="text-white  block px-3 py-2 rounded-md text-base font-semibold">Resume</a>
//               <a href="/" className="text-white  block px-3 py-2 rounded-md text-base font-semibold">CV</a>
//               <a href="/" className="text-white  block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</a>
//               <a href="/" className="text-white  block px-3 py-2 rounded-md text-base font-semibold">Advice</a>
//               <a href="/" className="text-white  block px-3 py-2 rounded-md text-base font-semibold">Login</a>
//               <a href="/" className="text-white  block px-3 py-2 rounded-md text-base font-semibold">Contact Us</a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import logo from './logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-200" id='navbg'>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="">
              <img src={logo} alt='logo' className='w-full h-14' />
            </Link>
          </div>
          <div className="hidden sm:flex sm:ml-6 sm:space-x-8" id='nav'>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Blog</Link>
            <Link to="/login" className="text-white px-2 py-2 text-lg font-semibold border-2 rounded-xl">Log in</Link>
            <Link to="/signup" className="text-white px-2 py-2 text-lg font-semibold border-2 rounded-xl">Sign up</Link>
          </div>
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold">Resume</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold">CV</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold">Advice</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold">Login</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
