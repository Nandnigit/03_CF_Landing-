import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from './logo.jpg';
import { useState } from "react";
import Modal from "./Modal";
// import Third_step from './Third_step'
import Signup from "./Signup";

function Login() {
    const [isthirdstepOpen, setThirdstepOpen] = useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <>
    <div className=" flex justify-center">
    <div className="p-8 rounded-xl  shadow-lg shadow-slate-700 w-full max-w-lg" >

        <div><img src= {logo} className=" w-20 h-10" /></div>
        
        <div className="text-2xl text-black text-center font-bold  align-middle">Welcome Back</div>
      <p className="text-black text-base mb-6">
        People across the globe are joining us to upgrade their career with our Robust AI.
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-black">Email ID</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        {/* <Link to="/signup">
          <p className="text-blue-300 hover:text-yellow-300 text-center py-2">
            New User? Create Account
          </p>
        </Link> */}
        <button
        type='button'
          className="text-blue-300 hover:text-yellow-300 text-center py-2"
          onClick={() => setThirdstepOpen(true)}
        >
        New User? Create Account
        </button>
        <div className="text-center py-2">
          <label className="text-black">Forgot Password?</label>
        </div>
        <button type="submit" className="w-full bg-sky-600 text-black font-bold px-4 py-2 rounded-md">
          Login
        </button>
            
            {/* <Link to='https://dashboard-six-neon-28.vercel.app/' target='_blank'>
            <div  className="w-full font-bold text-center text-black px-4 py-2 rounded-md">
          View Dashboard
        </div>
            </Link> */}

        {/* <button
        type='button'
          className="bg-yellow-500 text-white px-4 m-3 py-2 rounded-md"
          onClick={() => setThirdstepOpen(true)}
        >
         Complete Your Profile
        </button> */}
      </form>
    </div>
    </div>
    {/* <Modal isOpen={isthirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Third_step />
      </Modal> */}
      <Modal isOpen={isthirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Signup/>
      </Modal>
    </>
  );
}

export default Login;
