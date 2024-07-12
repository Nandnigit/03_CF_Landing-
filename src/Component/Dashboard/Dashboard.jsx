// // import React from 'react'
// // import ProfilePage from './Profile'
// // import Sidebar from './Sidebar'
// // import ProfileForm from './ProfileForm'

// // function Dashboard() {
// //   return (
// //   <>
// //     <ProfilePage />
// //     <div className='flex flex-col md:flex-row justify-center px-4 py-3'>
// //     <Sidebar />
// //     <ProfileForm/>
// //     </div>
// //   </>
// // )
// // }

// // export default Dashboard

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar'; // import your Sidebar component
// import ProfilePage from './Profile';

// const DashboardLayout = () => {
//   return (
//     <div className="w-full flex flex-col h-screen">
//         <ProfilePage />
//       <div className="flex justify-center border-2 border-red-500">
//         <Sidebar />
//         <div className="">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfilePage from './Profile';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full shadow-md">
        <ProfilePage />
      </div>
      <div className="flex flex-1 w-full max-w-6xl mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 w-full p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
