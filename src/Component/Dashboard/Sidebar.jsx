import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Features/authSlice";


const Sidebar = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout =()=>{
        dispatch(logout())
        navigate('/')
  }
  return (
    <div className="bg-white h-screen p-4 border-r border-gray-200 md:block">
      {/* Sidebar links */}
      <ul className="space-y-2 mt-4">
        <li>
          <Link
            to="profile"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded font-semibold"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👤</span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="ai-resume-builder"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🤖</span>
            <span>AI Resume Builder</span>
          </Link>
        </li>
        <li>
          <Link
            to="resumes"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2"><i className="fa-regular fa-file"></i></span>
            <span>My Resumes</span>
          </Link>
        </li>
        <li>
          <Link
            to="notifications"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔔</span>
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link
            to="skill-test"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">📝</span>
            <span>Skill Test</span>
          </Link>
        </li>
        <li>
          <Link
            to="add-referral"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">👥</span>
            <span>Add Referral</span>
          </Link>
        </li>
        <li>
          <Link
            to="payment"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">💳</span>
            <span>Payment</span>
          </Link>
        </li>
        <li>
          <Link
            to="change-password"
            className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded"
            onClick={onClose} // Close sidebar on link click
          >
            <span className="mr-2">🔑</span>
            <span>Change Password</span>
          </Link>
        </li>
        <li>
        <button
          onClick={handleLogout}
          className="flex items-center p-2 hover:bg-blue-200 border-b-2 rounded w-full text-left"
        >
          <span className="mr-2">🚪</span>
          <span>Log Out</span>
        </button>
      </li>
      </ul>
    </div>
  );
};

export default Sidebar;
