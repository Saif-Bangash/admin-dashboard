import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { toggleTheme } from '../../store/themeSlice';
import { FiSun, FiMoon, FiLogOut, FiUser, FiChevronDown } from 'react-icons/fi';
import { Menu, Transition } from '@headlessui/react';

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const theme = useSelector(state => state.theme.mode);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left side - Logo/Dashboard Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white uppercase tracking-wider  ">
              Admin<span className="text-blue-600 dark:text-blue-400">Panel</span>
            </h1>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>

            {/* User Dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex items-center space-x-2 max-w-xs rounded-full text-sm focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <FiUser className="h-4 w-4" />
                  </div>
                  <span className="hidden md:inline-block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user?.name}
                  </span>
                  <FiChevronDown className="hidden md:inline-block h-4 w-4 text-gray-400" />
                </Menu.Button>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-600' : ''
                        } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 flex items-center space-x-2`}
                      >
                        <FiLogOut className="h-4 w-4" />
                        <span>Sign out</span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
