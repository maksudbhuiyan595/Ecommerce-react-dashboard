import { useState } from "react";
import { FaBell, FaUserCircle, FaUserAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Nav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="flex justify-between items-center p-4">

        {/* Brand Name */}
        <div className="text-xl font-bold text-gray-100">
          Hello, Maksud Bhuiyan 👋
        </div>

        {/* Notification and Profile */}
        <div className="flex items-center space-x-6">

          {/* Notifications */}
          <div className="relative">
            <FaBell size={22} className="cursor-pointer hover:text-yellow-400 transition duration-300 ease-in-out" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2">
              5
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 hover:text-gray-300 transition duration-300 ease-in-out"
              onClick={toggleProfileMenu}
            >
              <FaUserCircle size={28} />
              <span className="text-sm font-medium">Maksud</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg z-10">
                <ul>
                  <li className="flex items-center p-3 hover:bg-gray-600 cursor-pointer">
                    <FaUserAlt className="mr-3" size={16} /> Profile
                  </li>
                  <li className="flex items-center p-3 hover:bg-gray-600 cursor-pointer">
                    <FaCog className="mr-3" size={16} /> Settings
                  </li>
                  <li className="flex items-center p-3 hover:bg-gray-600 cursor-pointer">
                    <FaSignOutAlt className="mr-3" size={16} /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
