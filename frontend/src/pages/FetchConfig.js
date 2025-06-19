import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchConfig() {
  const [formData, setFormData] = useState({ configId: "" });
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const configId = formData.configId.trim();
    if (!configId) return;
    
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    
    try {
      const res = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
      setData(res);
    } catch (err) {
      console.error('Error fetching configuration:', err);
      setIsError(true);
      setErrorMessage(err.response?.data?.error || "Failed to fetch configuration");
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (name, value) => {
    // Handle both event object and direct value assignment
    if (typeof name === 'object' && name.target) {
      // It's an event object
      const { name: fieldName, value: fieldValue } = name.target;
      setFormData(prev => ({
        ...prev,
        [fieldName]: fieldValue
      }));
    } else {
      // It's a direct value assignment
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle suggestion clicks
  const handleSuggestionClick = (value, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Configuration Details
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View and manage configuration details
          </p>
          </div>
            <Link 
                        to="/"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="-ml-1 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                      </Link>
        </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Form */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                Fetch Configuration
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="configId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Configuration ID
                  </label>
                  <input
                    type="text"
                    id="configId"
                    name="configId"
                    value={formData.configId}
                    onChange={handleInputChange}
                    placeholder="Enter configuration ID"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !formData.configId.trim()}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isLoading || !formData.configId.trim() 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Fetching...
                    </>
                  ) : (
                    'Fetch Configuration'
                  )}
                </button>
              </form>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                About this endpoint
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  <span className="font-medium">Method:</span> GET
                </p>
                <p>
                  <span className="font-medium">Endpoint:</span> /api/configurations/&#123;id&#125;
                </p>
                <p>
                  Enter a configuration ID to view its details. The ID can be found in your configuration management system or provided by your administrator.
                </p>
              </div>
            </div>
            </div>
            
            {/* Right column - Results */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Configuration Details
                </h2>
              </div>
              <div className="p-6">
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  </div>
                ) : isError ? (
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700 dark:text-red-300">
                          {errorMessage || 'An error occurred while fetching the configuration.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : data ? (
                  <div className="space-y-4">
                    {/* Table Section */}
                    {data.data && Array.isArray(data.data) && data.data.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {data.data.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell, j) => (
                                  <td key={j} className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-gray-500 dark:text-gray-400">No data available to display</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No configuration selected</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Enter a configuration ID and click "Fetch Configuration" to view details.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          
          
         
        </div>
      </div>
    );
}
