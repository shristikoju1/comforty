import { useState } from 'react';

const withSidebar = (WrappedComponent, position = 'left') => {
  return function EnhancedComponent(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    return (
      <div>
        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Sidebar Container */}
        <div
          className={`fixed top-0 h-full z-50 bg-white shadow-lg transform ${
            position === 'left'
              ? `${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
              : `${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`
          } transition-transform duration-300 ease-in-out`}
          style={{ width: '300px' }} // Adjust width as needed
        >
          <WrappedComponent
            {...props}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            closeSidebar={closeSidebar}
          />
        </div>
      </div>
    );
  };
};

export default withSidebar;
