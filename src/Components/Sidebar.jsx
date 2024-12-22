import React from "react";
import {
  FaListAlt,
  FaTags,
  FaShoppingCart,
  FaMoneyBillWave,
  FaChartLine,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-gray-800 h-screen text-white flex flex-col  transition-all duration-300`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h1 className="text-lg font-bold">E-Commerce</h1>}
        <button
          className="focus:outline-none text-white hover:bg-gray-700  rounded-md"
          onClick={toggleSidebar}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Menu Section */}
      <ul className="space-y-1">
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaListAlt size={20} className="mr-3" />
          {!isCollapsed && <span>Category</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaTags size={20} className="mr-3" />
          {!isCollapsed && <span>Brand</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaShoppingCart size={20} className="mr-3" />
          {!isCollapsed && <span>Product</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaMoneyBillWave size={20} className="mr-3" />
          {!isCollapsed && <span>Order</span>}
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaChartLine size={20} className="mr-3" />
          {!isCollapsed && <span>Reports</span>}
        </li>
      </ul>

      {/* Logout Button */}
      <div className="mb-4">
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaSignOutAlt size={20} className="mr-3" />
          {!isCollapsed && <span>Logout</span>}
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
