// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-white h-screen p-4 border-r border-gray-200">
//       <ul className="space-y-2">
//         <li>
//           <Link
//             to="profile"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded font-semibold"
//           >
//             <span className="mr-2">👤</span>
//             <span>Profile</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="ai-resume-builder"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">🤖</span>
//             <span>AI Resume Builder</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="notifications"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">🔔</span>
//             <span>Notifications</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="skill-test"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">📝</span>
//             <span>Skill Test</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="add-referral"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">👥</span>
//             <span>Add Referral</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="add-referral"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">💳</span>
//             <span> Payment </span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="change-password"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">🔑</span>
//             <span>Change Password</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="logout"
//             className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
//           >
//             <span className="mr-2">🚪</span>
//             <span>Log Out</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen p-4 border-r border-gray-200">
      <ul className="space-y-2">
        <li>
          <Link
            to="profile"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded font-semibold"
          >
            <span className="mr-2">👤</span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="ai-resume-builder"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">🤖</span>
            <span>AI Resume Builder</span>
          </Link>
        </li>
        <li>
          <Link
            to="notifications"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">🔔</span>
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link
            to="skill-test"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">📝</span>
            <span>Skill Test</span>
          </Link>
        </li>
        <li>
          <Link
            to="add-referral"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">👥</span>
            <span>Add Referral</span>
          </Link>
        </li>
        <li>
          <Link
            to="payment"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">💳</span>
            <span>Payment</span>
          </Link>
        </li>
        <li>
          <Link
            to="change-password"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">🔑</span>
            <span>Change Password</span>
          </Link>
        </li>
        <li>
          <Link
            to="logout"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
          >
            <span className="mr-2">🚪</span>
            <span>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
