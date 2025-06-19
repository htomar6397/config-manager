import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

// Lazy load the page components
const WelcomeScreen = lazy(() => import("./pages/WelcomeScreen"));
const FetchConfig = lazy(() => import("./pages/FetchConfig"));
const UpdateRemark = lazy(() => import("./pages/UpdateRemark"));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-dark dark:border-primary-light"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col transition-theme duration-300 bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
          <Header />
          <main className="flex-1 transition-theme duration-300">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/fetch-config" element={<FetchConfig />} />
                <Route path="/update-remark" element={<UpdateRemark />} />
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
