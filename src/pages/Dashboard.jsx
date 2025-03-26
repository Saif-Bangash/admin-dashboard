/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiBarChart2, FiDollarSign, FiActivity } from 'react-icons/fi';

export default function Dashboard() {
  // Mock data - replace with real data from your API
  const stats = [
    { title: "Total Users", value: "1,234", change: "+12%", icon: <FiUsers className="text-blue-500" size={24} /> },
    { title: "Revenue", value: "$8,456", change: "+8.2%", icon: <FiDollarSign className="text-green-500" size={24} /> },
    { title: "Performance", value: "86%", change: "+3.1%", icon: <FiActivity className="text-purple-500" size={24} /> },
    { title: "Engagement", value: "72%", change: "-1.2%", icon: <FiBarChart2 className="text-orange-500" size={24} /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" my-12 w-5xl sm:ml-0 lg:ml-64   " // Set width to 5xl and margin-left to 64
    >
      <div className="mb-8  sm:text-center lg:text-start">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white uppercase">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Users</h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View All
            </button>
          </div>
          {/* User list would go here */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-300 font-medium">JD</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">New Signups</span>
              <span className="font-medium text-gray-900 dark:text-white">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Active Sessions</span>
              <span className="font-medium text-gray-900 dark:text-white">142</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Pending Actions</span>
              <span className="font-medium text-gray-900 dark:text-white">5</span>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
