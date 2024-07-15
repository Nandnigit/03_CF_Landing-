// // // // // // // import React from 'react'
// // // // // // // import ProfilePage from './Profile'
// // // // // // // import Sidebar from './Sidebar'
// // // // // // // import ProfileForm from './ProfileForm'

// // // // // // // function Dashboard() {
// // // // // // //   return (
// // // // // // //   <>
// // // // // // //     <ProfilePage />
// // // // // // //     <div className='flex flex-col md:flex-row justify-center px-4 py-3'>
// // // // // // //     <Sidebar />
// // // // // // //     <ProfileForm/>
// // // // // // //     </div>
// // // // // // //   </>
// // // // // // // )
// // // // // // // }

// // // // // // // export default Dashboard

// // // // // // import React from 'react';
// // // // // // import { Outlet } from 'react-router-dom';
// // // // // // import Sidebar from './Sidebar'; // import your Sidebar component
// // // // // // import ProfilePage from './Profile';

// // // // // // const DashboardLayout = () => {
// // // // // //   return (
// // // // // //     <div className="w-full flex flex-col h-screen">
// // // // // //         <ProfilePage />
// // // // // //       <div className="flex justify-center border-2 border-red-500">
// // // // // //         <Sidebar />
// // // // // //         <div className="">
// // // // // //           <Outlet />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DashboardLayout;

// // // // // import React from 'react';
// // // // // import { Outlet } from 'react-router-dom';
// // // // // import Sidebar from './Sidebar';
// // // // // import ProfilePage from './Profile';

// // // // // const DashboardLayout = () => {
// // // // //   return (
// // // // //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// // // // //       <div className="w-full shadow-md">
// // // // //         <ProfilePage />
// // // // //       </div>
// // // // //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// // // // //         <div className="w-64 flex-shrink-0">
// // // // //           <Sidebar />
// // // // //         </div>
// // // // //         <div className="flex-1 w-full p-4 overflow-auto">
// // // // //           <Outlet />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DashboardLayout;

// // // // import React, { useState } from 'react';
// // // // import { Outlet } from 'react-router-dom';
// // // // import Sidebar from './Sidebar';
// // // // import ProfilePage from './Profile';
// // // // import { FaBars } from 'react-icons/fa'; // Importing a hamburger icon from react-icons

// // // // const DashboardLayout = () => {
// // // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// // // //   const toggleSidebar = () => {
// // // //     setIsSidebarCollapsed(!isSidebarCollapsed);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// // // //       <div className="w-full shadow-md">
// // // //         <ProfilePage />
// // // //       </div>
// // // //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// // // //         {isSidebarCollapsed ? (
// // // //           <div className="flex-shrink-0 p-2 cursor-pointer" onClick={toggleSidebar}>
// // // //             <FaBars className="text-2xl" />
// // // //           </div>
// // // //         ) : (
// // // //           <div className="w-64 flex-shrink-0">
// // // //             <Sidebar />
// // // //             <button onClick={toggleSidebar} className="md:hidden p-2">
// // // //               <FaBars className="text-2xl" />
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //         <div className="flex-1 w-full p-4 overflow-auto">
// // // //           <Outlet />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashboardLayout;

// // // import React, { useState } from 'react';
// // // import { Outlet } from 'react-router-dom';
// // // import Sidebar from './Sidebar';
// // // import ProfilePage from './Profile';
// // // import { FaBars } from 'react-icons/fa'; // Importing a hamburger icon from react-icons

// // // const DashboardLayout = () => {
// // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Start with sidebar collapsed on mobile

// // //   const toggleSidebar = () => {
// // //     setIsSidebarCollapsed(!isSidebarCollapsed);
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// // //       <div className="w-full shadow-md">
// // //         <ProfilePage />
// // //       </div>
// // //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// // //         {/* Hamburger icon for mobile view */}
// // //         <div className="md:hidden p-2 cursor-pointer" onClick={toggleSidebar}>
// // //           <FaBars className="text-2xl" />
// // //         </div>
        
// // //         {/* Sidebar for larger screens */}
// // //         <div className={`w-64 flex-shrink-0 md:block ${isSidebarCollapsed ? 'hidden' : ''}`}>
// // //           <Sidebar />
// // //         </div>

// // //         {/* Content area */}
// // //         <div className="flex-1 w-full p-4 overflow-auto">
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DashboardLayout;


// // import React, { useState } from 'react';
// // import { Outlet } from 'react-router-dom';
// // import Sidebar from './Sidebar';
// // import ProfilePage from './Profile';
// // import { FaBars } from 'react-icons/fa'; // Importing a hamburger icon from react-icons

// // const DashboardLayout = () => {
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Start with sidebar collapsed on mobile

// //   const toggleSidebar = () => {
// //     setIsSidebarCollapsed(!isSidebarCollapsed);
// //   };

// //   const handleLinkClick = () => {
// //     if (isSidebarCollapsed) {
// //       setIsSidebarCollapsed(true); // Collapse sidebar on link click on mobile
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// //       <div className="w-full shadow-md">
// //         <ProfilePage />
// //       </div>
// //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// //         {/* Hamburger icon for mobile view */}
// //         <div className="md:hidden p-2 cursor-pointer" onClick={toggleSidebar}>
// //           <FaBars className="text-2xl" />
// //         </div>
        
// //         {/* Sidebar for larger screens */}
// //         <div className={`w-64 flex-shrink-0 md:block ${isSidebarCollapsed ? 'hidden' : ''}`}>
// //           <Sidebar onLinkClick={handleLinkClick} />
// //         </div>

// //         {/* Content area */}
// //         <div className="flex-1 w-full p-4 overflow-auto">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;


// // import React, { useState } from 'react';
// // import { Outlet } from 'react-router-dom';
// // import Sidebar from './Sidebar';
// // import ProfilePage from './Profile';
// // import { FaBars } from 'react-icons/fa'; // Importing a hamburger icon from react-icons

// // const DashboardLayout = () => {
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Start with sidebar collapsed on mobile

// //   const toggleSidebar = () => {
// //     setIsSidebarCollapsed(!isSidebarCollapsed);
// //   };

// //   const handleLinkClick = () => {
// //     if (isSidebarCollapsed) {
// //       setIsSidebarCollapsed(true); // Collapse sidebar on link click on mobile
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// //       <div className="w-full shadow-md">
// //         <ProfilePage />
// //       </div>
// //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// //         {/* Hamburger icon for mobile view */}
// //         <div className="md:hidden p-2 cursor-pointer" onClick={toggleSidebar}>
// //           <FaBars className="text-2xl" />
// //         </div>
        
// //         {/* Sidebar for larger screens */}
// //         <div className={`w-64 flex-shrink-0 md:block ${isSidebarCollapsed ? 'hidden' : ''}`}>
// //           <Sidebar onLinkClick={handleLinkClick} />
// //         </div>

// //         {/* Content area */}
// //         <div className="flex-1 w-full p-4 overflow-auto">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;


// // import React, { useState } from 'react';
// // import { Outlet } from 'react-router-dom';
// // import Sidebar from './Sidebar';
// // import ProfilePage from './Profile';
// // import { FaBars } from 'react-icons/fa'; // Importing a hamburger icon from react-icons

// // const DashboardLayout = () => {
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Start with sidebar collapsed on mobile

// //   const toggleSidebar = () => {
// //     setIsSidebarCollapsed(!isSidebarCollapsed);
// //   };

// //   const handleLinkClick = () => {
// //     if (isSidebarCollapsed) {
// //       setIsSidebarCollapsed(true); // Collapse sidebar on link click on mobile
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// //       <div className="w-full shadow-md">
// //         <ProfilePage />
// //       </div>
// //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// //         {/* Hamburger icon for mobile view */}
// //         <div className="md:hidden p-4">
// //           <button onClick={toggleSidebar} className="focus:outline-none">
// //             <FaBars className="text-2xl" />
// //           </button>
// //         </div>
        
// //         {/* Sidebar for larger screens */}
// //         <div className={`w-64 flex-shrink-0 md:block ${isSidebarCollapsed ? 'hidden' : ''}`}>
// //           <Sidebar onLinkClick={handleLinkClick} />
// //         </div>

// //         {/* Content area */}
// //         <div className="flex-1 w-full p-4 overflow-auto">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;


// // import React from 'react';
// // import { Outlet } from 'react-router-dom';
// // import Sidebar from './Sidebar';
// // import ProfilePage from './Profile';

// // const DashboardLayout = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center bg-gray-100">
// //       <div className="w-full shadow-md">
// //         <ProfilePage />
// //       </div>
// //       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
// //         {/* Sidebar */}
// //         <div className="md:w-64 flex-shrink-0 md:block">
// //           <Sidebar />
// //         </div>

// //         {/* Content area */}
// //         <div className="flex-1 w-full p-4 overflow-auto">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;



// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import ProfilePage from './Profile';
// import { FaBars } from 'react-icons/fa'; // Import hamburger icon

// const DashboardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100">
//       <div className="w-full shadow-md">
//         <ProfilePage />
//       </div>
//       <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
//         {/* Hamburger icon for mobile view */}
//         <div className="md:hidden">
//           <button onClick={toggleSidebar} className="p-4 focus:outline-none">
//             <FaBars className="text-2xl" />
//           </button>
//         </div>

//         {/* Sidebar */}
//         <div className={`md:w-64 flex-shrink-0 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
//           <Sidebar onClose={closeSidebar} />
//         </div>

//         {/* Content area */}
//         <div className="flex-1 w-full p-4 overflow-auto">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfilePage from './Profile';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full shadow-md">
        <ProfilePage />
      </div>
      <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="p-4 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Sidebar */}
        <div className={`md:w-64 flex-shrink-0 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <Sidebar onClose={closeSidebar} />
        </div>

        {/* Content area */}
        <div className="flex-1 w-full p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
