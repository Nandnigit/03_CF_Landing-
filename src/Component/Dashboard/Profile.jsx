// // // import React from "react";

// // // const handleResume =(e)=>{
// // //     e.preventDefault();

// // //     console.log("resume added")
// // // }

// // // const ProfilePage = () => {
// // //   return (
// // //     <div className="bg-indigo-900 text-white p-4">
// // //       <div className="max-w-2xl mx-auto rounded-lg shadow-lg p-6">
// // //         <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
// // //           <div className="flex items-center mb-4 sm:mb-0">
// // //             <img
// // //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
// // //               alt="Profile"
// // //               className="w-20 h-20 rounded-full mr-4 border-4 border-indigo-700"
// // //             />
// // //             <div>
// // //               <h1 className="text-2xl font-bold">Ben Dexter</h1>
// // //               <p className="text-indigo-300">Web Developer</p>
// // //             </div>
// // //           </div>

// // //           <div className="text-left mb-4 sm:mb-0">
// // //             <p>📧 ben@gmail.com</p>
// // //             <p>📱 12345678</p>
// // //             <p>📍 United States, Florida</p>
// // //           </div>
// // //         </div>
// // //         <hr className="opacity-50" />
// // //         <div className="flex flex-col sm:flex-row justify-center py-4 gap-4">
// // //           <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
// // //             Resume Score
// // //           </button>
// // //           {/* <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
// // //             Upload Resume
// // //           </button> */}
// // //          <div className="flex justify-center items-center border-2">
// // //          <input type="file"
// // //             placeholder="Select you file"
// // //           />
// // //           <button type="submit" onClick={handleResume} className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">upload Resume </button>
// // //          </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;


// // import React, { useState } from "react";

// // const ProfilePage = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   const handleResume = (e) => {
// //     e.preventDefault();
// //     if (selectedFile) {
// //       console.log("Selected file:", selectedFile.name);
// //     } else {
// //       console.log("No file selected");
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     setSelectedFile(e.target.files[0]);
// //   };

// //   return (
// //     <div className="bg-indigo-900 text-white p-4 min-h-screen flex items-center justify-center">
// //       <div className="max-w-2xl mx-auto rounded-lg shadow-lg p-6 bg-indigo-800">
// //         <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
// //           <div className="flex items-center mb-4 sm:mb-0">
// //             <img
// //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
// //               alt="Profile"
// //               className="w-20 h-20 rounded-full mr-4 border-4 border-indigo-700"
// //             />
// //             <div>
// //               <h1 className="text-2xl font-bold">Ben Dexter</h1>
// //               <p className="text-indigo-300">Web Developer</p>
// //             </div>
// //           </div>
// //           <div className="text-left">
// //             <p>📧 ben@gmail.com</p>
// //             <p>📱 12345678</p>
// //             <p>📍 United States, Florida</p>
// //           </div>
// //         </div>
// //         <hr className="opacity-50 mb-6" />
// //         <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4">
// //           <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
// //             Resume Score
// //           </button>
// //           <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
// //             <input
// //               type="file"
// //               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-indigo-700"
// //               onChange={handleFileChange}
// //             />
// //             <button
// //               type="submit"
// //               onClick={handleResume}
// //               className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
// //             >
// //               Upload Resume
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;


// // import React, { useState } from "react";
// // import axios from "axios";
// // import toast from "react-hot-toast";

// // const ProfilePage = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [uploadStatus, setUploadStatus] = useState("");
// //   const token = localStorage.getItem('token');

// //   const handleResume = async (e) => {
// //     e.preventDefault();
// //     if (selectedFile) {
// //       try {
// //         const formData = new FormData();
// //         formData.append("files", selectedFile);

// //         const response = await axios.post(
// //           "https://api.perfectresume.ca/api/user/resume-upload",
// //           formData,
// //           {
// //             headers: {
// //               "Authorization": `${token}`
// //             }
// //           }
// //         );

// //         if (response.status === 200) {
// //           setUploadStatus("Resume uploaded successfully.");
// //           console.log(response)
// //           toast.success("Resume Uploaded Successfully")
// //         } else {
// //           setUploadStatus("Failed to upload resume.");
// //         }
// //       } catch (error) {
// //         console.error("Error uploading resume:", error);
// //         toast.error("Failed to upload resume")
// //         setUploadStatus("An error occurred while uploading the resume.");
// //       }
// //     } else {
// //       setUploadStatus("No file selected");
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     setSelectedFile(e.target.files[0]);
// //     setUploadStatus(""); 
// //   };

// //   return (
// //     <div className="bg-indigo-900 text-white p-4 flex items-center justify-center">
// //       <div className="max-w-2xl mx-auto rounded-lg shadow-lg p-6 bg-indigo-800">
// //         <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
// //           <div className="flex items-center mb-4 sm:mb-0">
// //             <img
// //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
// //               alt="Profile"
// //               className="w-20 h-20 rounded-full mr-4 border-4 border-indigo-700"
// //             />
// //             <div>
// //               <h1 className="text-2xl font-bold">Ben Dexter</h1>
// //               <p className="text-indigo-300">Web Developer</p>
// //             </div>
// //           </div>
// //           <div className="text-left">
// //             <p>📧 ben@gmail.com</p>
// //             <p>📱 12345678</p>
// //             <p>📍 United States, Florida</p>
// //           </div>
// //         </div>
// //         <hr className="opacity-50 mb-6" />
// //         <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4">
// //           <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
// //             Resume Score
// //           </button>
// //           <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
// //             <input
// //               type="file"
// //               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-indigo-700"
// //               onChange={handleFileChange}
// //             />
// //             <button
// //               type="submit"
// //               onClick={handleResume}
// //               className="bg-black text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
// //             >
// //               Upload Resume
// //             </button>
// //           </div>
// //         </div>
// //         {uploadStatus && (
// //           <div className="mt-4 text-center">
// //             <p className="text-sm">{uploadStatus}</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;


// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const ProfilePage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const token = localStorage.getItem('token');

//   const handleResume = async (e) => {
//     e.preventDefault();
//     if (selectedFile) {
//       try {
//         const formData = new FormData();
//         formData.append("files", selectedFile);

//         const response = await axios.post(
//           "https://api.perfectresume.ca/api/user/resume-upload",
//           formData,
//           {
//             headers: {
//               "Authorization": `${token}`
//             }
//           }
//         );

//         if (response.status === 200) {
//           setUploadStatus("Resume uploaded successfully.");
//           console.log(response)
//           toast.success("Resume Uploaded Successfully")
//         } else {
//           setUploadStatus("Failed to upload resume.");
//         }
//       } catch (error) {
//         console.error("Error uploading resume:", error);
//         toast.error("Failed to upload resume")
//         setUploadStatus("An error occurred while uploading the resume.");
//       }
//     } else {
//       setUploadStatus("No file selected");
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setUploadStatus("");
//   };

//   return (
//     <div className="bg-indigo-900 p-4 flex flex-col md:flex-row justify-between items-center">
//       <div className="max-w-4xl mx-auto">
//         <div className=" rounded-lg shadow-lg p-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//             <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">Profile</h1>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="fileInput"
//               />
              
//             </div>
//           </div>
          
//           <div className="space-y-6">
//             <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
//                 alt="Profile"
//                 className="w-20 h-20 rounded-full mb-4 md:mb-0"
//               />
//               <div className=" text-white">
//                 <h2 className="text-xl font-semibold">Ben Dexter</h2>
//                 <p className="">Web Developer</p>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-white">📧 ben@gmail.com</p>
//                 <p className="text-white">📱 12345678</p>
//                 <p className="text-white">📍 United States, Florida</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex flex-col justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
//               Resume Score
//             </button>
//             <div className="flex flex-col justify-center items-center">
//             <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
//                 Choose File
//               </label>
//               <span className="text-white">{selectedFile ? selectedFile.name : "No file chosen"}</span>
//             <button
//               onClick={handleResume}
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//             >
//               Upload Resume
//             </button>
//             </div>
//           </div>

//           {uploadStatus && (
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-600">{uploadStatus}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const ProfilePage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");
//   const token = localStorage.getItem('token');

//   const handleResume = async (e) => {
//     e.preventDefault();
//     if (selectedFile) {
//       try {
//         const formData = new FormData();
//         formData.append("files", selectedFile);

//         const response = await axios.post(
//           "https://api.perfectresume.ca/api/user/resume-upload",
//           formData,
//           {
//             headers: {
//               "Authorization": `${token}`
//             }
//           }
//         );

//         if (response.status === 200) {
//           setUploadStatus("Resume uploaded successfully.");
//           toast.success("Resume Uploaded Successfully")
//         } else {
//           setUploadStatus("Failed to upload resume.");
//         }
//       } catch (error) {
//         console.error("Error uploading resume:", error);
//         toast.error("Failed to upload resume")
//         setUploadStatus("An error occurred while uploading the resume.");
//       }
//     } else {
//       setUploadStatus("No file selected");
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setUploadStatus("");
//   };

//   return (
//     <div className="bg-indigo-900 p-4 flex flex-col md:flex-row justify-between items-center">
//       <div className="w-[80%] mx-auto">
//         <div className="rounded-lg shadow-lg p-6 bg-indigo-800 flex justify-between items-center">
//           <div className="space-y-6">
//             <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
//                 alt="Profile"
//                 className="w-20 h-20 rounded-full mb-4 md:mb-0"
//               />
//               <div className="text-white">
//                 <h2 className="text-xl font-semibold">Ben Dexter</h2>
//                 <p className="">Web Developer</p>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-white">📧 ben@gmail.com</p>
//                 <p className="text-white">📱 12345678</p>
//                 <p className="text-white">📍 United States, Florida</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6  px-4 gap-4">
//            <div className=" flex flex-col justify-center items-center gap-2">
//            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 mb-4 md:mb-0">
//               Resume Score
//             </button>
//             <div className="mt-8 flex flex-col justify-start items-start gap-4">
//             <div className="flex items-end gap-2 space-x-2">
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="fileInput"
//               />
//               <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
//                 Choose File
//               </label>
//               <span className="text-white ml-2">{selectedFile ? selectedFile.name : "No file chosen"}</span>
//             </div>
//             <button
//                 onClick={handleResume}
//                 className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//               >
//                 Upload Resume
//               </button>
//           </div>
//            </div>
//           </div>

//           {uploadStatus && (
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-600">{uploadStatus}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const token = localStorage.getItem('token');

  const handleResume = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("files", selectedFile);

        const response = await axios.post(
          "https://api.perfectresume.ca/api/user/resume-upload",
          formData,
          {
            headers: {
              "Authorization": `${token}`
            }
          }
        );

        if (response.status === 200) {
          setUploadStatus("Resume uploaded successfully.");
          toast.success("Resume Uploaded Successfully")
        } else {
          setUploadStatus("Failed to upload resume.");
        }
      } catch (error) {
        console.error("Error uploading resume:", error);
        toast.error("Failed to upload resume")
        setUploadStatus("An error occurred while uploading the resume.");
      }
    } else {
      setUploadStatus("No file selected");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus("");
  };

  return (
    <div className="bg-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-lg shadow-lg p-6 bg-indigo-800 flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-6 mb-6 md:mb-0 md:mr-6 md:pr-6">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt="Profile"
                className="w-20 h-20 rounded-full mb-4 md:mb-0"
              />
              <div className="text-white">
                <h2 className="text-xl font-semibold">Ben Dexter</h2>
                <p className="">Web Developer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-white">📧 ben@gmail.com</p>
                <p className="text-white">📱 12345678</p>
                <p className="text-white">📍 United States, Florida</p>
              </div>
            </div>
          </div>
           
          {/* Vertical divider for larger screens */}
          <div className="hidden md:block border-[0.5px] border-gray-500 h-60"></div>
          
          <div className="flex flex-col justify-start items-start gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Resume Score
            </button>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                Choose File
              </label>
              <span className="text-white ml-2">{selectedFile ? selectedFile.name : "No file chosen"}</span>
            </div>
            <button
              onClick={handleResume}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Upload Resume
            </button>
          </div>
        </div>

        {uploadStatus && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">{uploadStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
