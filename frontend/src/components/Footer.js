import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Configuration Manager. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:htomar6397@gmail.com" 
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Contact Support
            </a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Developed by Mayank Tomar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
