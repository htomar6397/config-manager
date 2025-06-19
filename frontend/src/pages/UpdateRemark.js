import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UpdateRemark() {
  const [formData, setFormData] = useState({
    configId: "",
    remark: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous errors when user starts typing
    if (isError) {
      setIsError(false);
      setErrorMessage("");
    }
  };

  // Handle suggestion click for the remark field
  const handleSuggestionClick = (suggestion) => {
    setFormData(prev => ({
      ...prev,
      remark: suggestion
    }));
    
    // Clear any previous errors when using a suggestion
    if (isError) {
      setIsError(false);
      setErrorMessage("");
    }
  };

  // Predefined remark suggestions
  const remarkSuggestions = [
    "Looks good",
    "Approved",
    "Needs changes",
    "Completed",
    "In progress",
    "Reviewed",
    "Pending approval"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Skip if no config ID or remark
    if (!formData.configId.trim()) {
      setIsError(true);
      setErrorMessage("Please enter a configuration ID");
      return;
    }
    
    if (!formData.remark.trim()) {
      setIsError(true);
      setErrorMessage("Please enter a remark");
      return;
    }
    
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    
    try {
      await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/configurations/${formData.configId}`,
        { remark: formData.remark },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setIsSubmitted(true);
      
      // Clear the form after successful submission
      setFormData({
        configId: "",
        remark: ""
      });
      
    } catch (err) {
      console.error("Error updating remark:", err);
      setIsError(true);
      setErrorMessage(
        err.response?.data?.error || "Failed to update remark. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

 

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Update Remark
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Add or update remarks for a configuration
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
                Update Remark
              </h2>
              <div className="space-y-4">
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
                
                <div>
                  <label htmlFor="remark" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Remark
                  </label>
                  <div className="relative">
                    <textarea
                      id="remark"
                      name="remark"
                      value={formData.remark}
                      onChange={handleInputChange}
                      placeholder="Enter your remark"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                    {isSubmitted && (
                      <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                        <p className="font-medium">Remark updated successfully!</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Quick Suggestions */}
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Quick suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                      {remarkSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion, 'remark')}
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-gray-700 dark:text-gray-200 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.configId.trim() || !formData.remark.trim()}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isLoading || !formData.configId.trim() || !formData.remark.trim()
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
                      Updating...
                    </>
                  ) : (
                    'Update Remark'
                  )}
                </button>
                
                <div className="text-center mt-2">
                  <a 
                    href="/fetch-config" 
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    ← Back to Fetch Configuration
                  </a>
                </div>
              </div>
            </div>
            
           
          </div>
          
          {/* Right column - Results */}
          <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                About this endpoint
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  <span className="font-medium">Method:</span> PUT
                </p>
                <p>
                  <span className="font-medium">Endpoint:</span> /api/configurations/&#123;id&#125;
                </p>
                <p>
                  Update the remark for a specific configuration. The configuration ID is required, and the remark cannot be empty.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Update Status
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
                          {errorMessage || 'An error occurred while updating the remark.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30">
                      <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Remark Updated Successfully</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      The remark has been successfully updated for configuration ID: <span className="font-medium">{formData.configId}</span>
                    </p>
                    <div className="mt-6">
                      <Link
                        to={`/fetch-config/${formData.configId}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="-ml-1 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Configuration
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No update submitted yet</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Enter a configuration ID and remark, then click "Update Remark" to proceed.
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
