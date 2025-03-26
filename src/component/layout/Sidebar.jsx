import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUsers } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: '/', name: 'Dashboard', icon: <FiHome className="w-5 h-5" /> },
    { path: '/users', name: 'Users', icon: <FiUsers className="w-5 h-5" /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed z-50   m-2 top-8 sm:top-12   rounded-md lg:hidden   dark:bg-gray-700 focus:outline-none"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <IoIosArrowForward  className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-14 h-screen left-0 z-40 w-64 bg-white   transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
          isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        } lg:translate-x-0`}
      >
        <div className="p-4 ">
           
          <nav className="mt-6">
            <ul>
              {navItems.map((item) => (
                <li key={item.path} className="mb-2">
                  <Link
                    to={item.path}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
