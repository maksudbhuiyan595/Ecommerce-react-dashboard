import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Nav from "./Components/Nav";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "w-64" : "w-16"} transition-all duration-300`}>
        <Sidebar isCollapsed={!isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Nav />
        <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>Welcome to your application!</p>
        </main>
      </div>
    </div>
  );
};

export default App;
