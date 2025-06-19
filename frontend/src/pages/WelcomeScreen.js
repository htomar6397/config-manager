import { Link } from "react-router-dom";

export default function WelcomeScreen() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
    
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">
            Configuration Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your configurations and remarks with ease
          </p>
        </div>
        <div className="px-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400 font-light">
            Developed by <span className="font-medium">Mayank Tomar</span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fetch Configuration Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
              Fetch Configuration
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Retrieve configuration details by entering a configuration ID. View all the associated data and settings in a clean, organized format.
            </p>
            <Link
              to="/fetch-config"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Fetch Configuration
              <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Update Remark Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
              Update Remark
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Add or update remarks for existing configurations. Keep track of important notes and changes for future reference.
            </p>
            <Link
              to="/update-remark"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Update Remark
              <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
            About This Application
          </h2>
          <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              This Configuration Manager provides a simple and intuitive interface to manage your application configurations and remarks. Built with modern web technologies, it offers a responsive design that works seamlessly across all devices.
            </p>
            <p className="mb-4">
              <span className="font-medium">Key Features:</span>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>View detailed configuration information</li>
                <li>Update and manage configuration remarks</li>
                <li>Clean, user-friendly interface</li>
                <li>Dark mode support</li>
                <li>Responsive design for all screen sizes</li>
              </ul>
            </p>
          </div>
        </div>

     
       
      </div>
    </div>
  );
}