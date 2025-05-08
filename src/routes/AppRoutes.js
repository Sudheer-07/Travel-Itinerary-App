import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { OnBoarding, Dashboard, Login } from '../pages';

// Check localStorage for dummy authentication
function isAuthenticated() {
  return localStorage.getItem('auth') === 'dashboard' || localStorage.getItem('auth') === 'onboarding';
}

const AppRoutes = () => {
  const location = useLocation();
  const authed = isAuthenticated();

  // If not authenticated, always redirect to login
  if (!authed && location.pathname !== '/') {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // If authenticated and on login, redirect to correct page
  if (authed && location.pathname === '/') {
    const authType = localStorage.getItem('auth');
    return <Navigate to={authType === 'onboarding' ? '/onboarding' : '/dashboard'} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/onboarding" element={authed ? <OnBoarding /> : <Navigate to="/" replace />} />
      <Route path="/dashboard" element={authed ? <Dashboard /> : <Navigate to="/" replace />} />
      {/* Add more protected routes as needed */}
    </Routes>
  );
};

export default AppRoutes; 