// import React from "react";

// const ProfilePage = () => {
//   return (
//     <div className="bg-indigo-900 text-white p-4">
//       <div className="max-w-md mx-auto">
//         <div className="flex justify-between items-center ">
//           <div className="flex items-center mb-4">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
//               alt="Profile"
//               className="w-16 h-16 rounded-full mr-4"
//             />
//             <div>
//               <h1 className="text-xl font-bold">Ben Dexter</h1>
//               <p className="text-indigo-300">Web developer</p>
//             </div>
//           </div>

//           <div className="mb-4">
//             <p>📧 ben@gmail.com</p>
//             <p>📱 1234678</p>
//             <p>📍 United States, Florida</p>
//           </div>

//           <div className="flex gap-2 ">
//             <button className="bg-black text-white py-2 px-4 text-xl rounded-lg">
//               {" "}
//               Resume Score{" "}
//             </button>
//             <button className="bg-black text-white py-2 px-4 text-xl rounded-lg">
//               {" "}
//               upload Resume{" "}
//             </button>
//           </div>
//         </div>

//         {/* <div>
//           <h2 className="font-semibold mb-2">Profile Strength</h2>
//           <div className="bg-indigo-700 rounded-full h-4">
//             <div className="bg-indigo-400 rounded-full h-4 w-3/4"></div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-indigo-900 text-white p-4">
      <div className="max-w-2xl mx-auto rounded-lg shadow-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4 border-4 border-indigo-700"
            />
            <div>
              <h1 className="text-2xl font-bold">Ben Dexter</h1>
              <p className="text-indigo-300">Web Developer</p>
            </div>
          </div>

          <div className="text-left mb-4 sm:mb-0">
            <p>📧 ben@gmail.com</p>
            <p>📱 12345678</p>
            <p>📍 United States, Florida</p>
          </div>
        </div>
        <hr className="opacity-50" />
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-4">
          <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
            Resume Score
          </button>
          <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
            Upload Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
