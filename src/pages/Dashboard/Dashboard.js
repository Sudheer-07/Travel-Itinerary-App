// import { useState } from 'react';
import Greeting from './components/Greeting';
import UpcomingTrip from './components/UpcomingTrip';
import FlightDetails from './components/FlightDetails';
import Accommodation from './components/Accommodation';
import Activities, { daysData } from './components/Activities';
import BottomNavBar from './components/BottomNavBar';
import { FiLogOut } from 'react-icons/fi';

// Calculate total activities once
const totalActivities = daysData.reduce((sum, day) => sum + day.activities.length, 0);

const Dashboard = () => {
  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('auth');
    // Redirect to login page
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-black p-4 gap-4 pb-24">
      {/* Add logout button */}
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
      <Greeting />
      <UpcomingTrip totalActivities={totalActivities} />
      <FlightDetails />
      <Accommodation />
      <Activities days={daysData} totalActivities={totalActivities} />
      <BottomNavBar />
    </div>
  );
};

export default Dashboard; 