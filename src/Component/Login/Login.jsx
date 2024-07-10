import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from './logo.jpg';
import { useState } from "react";
import Modal from "./Modal";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Third_step from './Third_step'
import Signup from "./Signup";

function Login() {
    const [isthirdstepOpen, setThirdstepOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const url = `/api/user/auth/login`;
        console.log(url);
        if (!formData.email || !formData.password) {
            toast.error("Email and Password are required");
        } else {
            try {
                const response = await axios.post(
                    url,
                    formData,
                    {
                        withCredentials:true,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }
                );
                if (response.status === 200) {
                    toast.success("Logged-in successfully!");
                    navigate('/');
                } else {
                    toast.error("Failed to log in.");
                }
                console.log("login Response", response);
            } catch (err) {
                console.log(err);
                toast.error(`${err.response?.data?.message || 'Login failed'}`);
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
                    <div><img src={logo} className="w-20 h-10" alt="Logo" /></div>
                    <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
                    <p className="text-black text-base mb-6">
                        People across the globe are joining us to upgrade their career with our Robust AI.
                    </p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-black">Email ID</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Enter your email ID"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="button"
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
                    </form>
                </div>
            </div>
            <Modal isOpen={isthirdstepOpen} onClose={() => setThirdstepOpen(false)}>
                <Signup />
            </Modal>
        </>
    );
}

export default Login;

