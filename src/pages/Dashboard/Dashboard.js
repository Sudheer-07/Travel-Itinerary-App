// import { useState } from 'react';
import Greeting from './components/Greeting';
import UpcomingTrip from './components/UpcomingTrip';
import FlightDetails from './components/FlightDetails';
import Accommodation from './components/Accommodation';
import Activities, { daysData } from './components/Activities';
import BottomNavBar from './components/BottomNavBar';

// Calculate total activities once
const totalActivities = daysData.reduce((sum, day) => sum + day.activities.length, 0);

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-black p-4 gap-4 pb-24">
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