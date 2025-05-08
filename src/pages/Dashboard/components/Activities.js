import { useState } from 'react';
import { FaWalking } from 'react-icons/fa';

// Export daysData so it can be used by Dashboard.js
export const daysData = [
  {
    date: '27', label: 'MON', month: 'JAN', activities: [
      {
        title: 'Senso-ji Temple & Nakamise Shopping Street Senso-ji',
        timing: '8:15 am Morning',
        duration: '3 hours',
        pickup: 'From Hotel',
        image: require('../../../assets/activity1.png'),
      },
      {
        title: 'Tokyo Sky Tree',
        timing: '1:00 pm Afternoon',
        duration: '3 hours',
        pickup: 'From Nakamise Street',
        image: require('../../../assets/activity2.png'),
      },
      {
        title: 'Kimono Wearing',
        timing: 'Anytime before 8:00pm',
        duration: '1-2 hours',
        pickup: 'From Hotel',
        image: require('../../../assets/activity3.png'),
      },
    ],
  },
  {
    date: '28', label: 'TUE', month: 'JAN', activities: [
      {
        title: 'Shibuya Crossing',
        timing: '10:00 am',
        duration: '2 hours',
        pickup: 'From Hotel',
        image: require('../../../assets/activity1.png'),
      },
    ],
  },
  // Add more days as needed
  {
    date: '29', label: 'WED', month: 'JAN', activities: [],
  },
  {
    date: '30', label: 'THU', month: 'JAN', activities: [],
  },
  {
    date: '31', label: 'FRI', month: 'JAN', activities: [],
  },
  {
    date: '1', label: 'SAT', month: 'FEB', activities: [],
  },
  {
    date: '2', label: 'SUN', month: 'FEB', activities: [],
  },
];

function Activities({ days, totalActivities }) {
  const [selectedDay, setSelectedDay] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const day = days[selectedDay]; 
  return (
    <div className="w-full max-w-xl mx-auto">

      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-gray-900 dark:text-white text-2xl">Activities</span>
        <button className="text-sm font-bold underline text-lime-300 dark:text-lime-300" onClick={() => setShowModal(true)}>See all</button>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-300 dark:border-neutral-600 p-4 mb-4">

        <div className="flex gap-2 mb-3">
          <span className="bg-[#3646e3] dark:bg-lime-300 dark:text-neutral-800 text-white font-semibold px-4 py-1 rounded-xl text-base">Day Plan</span>

          <span className="border border-[#3646e3] dark:border-lime-300 text-[#3646e3] dark:text-lime-300 font-semibold px-4 py-1 rounded-xl text-base">
            {totalActivities} Activities
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {days.map((d, i) => {
            const isMonthChange = i > 0 && d.month !== days[i-1].month;
            const isSelected = i === selectedDay;
            return (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={
                  isSelected
                    ? 'flex flex-col items-center px-3 py-2 rounded-xl border-2 border-[#3646e3] dark:border-lime-300 bg-[#3646e3] dark:bg-neutral-600 text-white font-bold min-w-[64px] shadow'
                    : isMonthChange
                    ? 'flex flex-col items-center px-3 py-2 rounded-xl bg-gray-500 dark:bg-neutral-600 text-white font-bold min-w-[64px]'
                    : 'flex flex-col items-center px-3 py-2 rounded-xl bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 min-w-[64px] border border-gray-200 dark:border-neutral-600'
                }
                style={{ fontFamily: 'Montserrat' }}
              >
                <span className={isSelected || isMonthChange ? 'text-xs font-bold' : 'text-xs'}>{d.month}</span>
                <span className={isSelected || isMonthChange ? 'text-xs font-bold' : 'text-xs'}>{d.label}</span>
                <span className={isSelected ? 'text-xl font-bold mt-1' : 'text-xl mt-1'}>{d.date}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="bg-[#3646e3] dark:bg-neutral-600 text-white font-semibold px-4 py-1 rounded-xl text-base">Day {selectedDay + 1} &nbsp; {day.month}.{day.date}</span>
        <span className="text-[#3646e3] dark:text-lime-300 font-semibold flex items-center gap-2 text-base"><FaWalking /> {day.activities.length} Activities</span>
      </div>
      <div className="flex flex-col gap-4">
        {day.activities.length === 0 && (
          <div className="text-gray-400 dark:text-neutral-400 text-center">No activities for this day.</div>
        )}
        {day.activities.map((act, idx) => (
          <div key={idx} className="flex bg-white dark:bg-neutral-800 rounded-2xl border border-gray-300 dark:border-neutral-600 overflow-hidden shadow-sm">
            <img src={act.image} alt={act.title} className="object-cover flex-shrink-0" />
            <div className="flex flex-col justify-center p-4 flex-1">
              <div className="font-bold text-lg mb-1 text-gray-800 dark:text-white" style={{fontFamily: 'Montserrat'}}>{act.title}</div>
              <div className="mb-1 text-gray-700 dark:text-neutral-300"><span className="font-bold">Timing:</span> {act.timing}</div>
              <div className="mb-1 text-gray-700 dark:text-neutral-300"><span className="font-bold">Duration:</span> {act.duration}</div>
              <div className="mb-1 text-gray-700 dark:text-neutral-300"><span className="font-bold">Pick up:</span> {act.pickup}</div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <button className="absolute top-2 right-2 text-lg font-bold text-gray-500 dark:text-neutral-300 hover:text-gray-800 dark:hover:text-white" onClick={() => setShowModal(false)}>&times;</button>
            <div className="text-xl font-bold mb-4 text-gray-900 dark:text-white">All Activities for {day.month} {day.date}</div>
            <div className="flex flex-col gap-4">
              {day.activities.length === 0 && (
                <div className="text-gray-400 dark:text-neutral-400 text-center">No activities for this day.</div>
              )}
              {day.activities.map((act, idx) => (
                <div key={idx} className="flex bg-white dark:bg-neutral-800 rounded-2xl border border-gray-300 dark:border-neutral-600 overflow-hidden shadow-sm">
                  <img src={act.image} alt={act.title} className="object-cover flex-shrink-0" />
                  <div className="flex flex-col justify-center p-4 flex-1">
                    <div className="font-bold text-lg mb-1 text-gray-800 dark:text-white" style={{fontFamily: 'Montserrat'}}>{act.title}</div>
                    <div className="mb-1 text-gray-700 dark:text-neutral-300"><span className="font-bold">Timing:</span> {act.timing}</div>
                    <div className="mb-1 text-gray-700 dark:text-neutral-300"><span className="font-bold">Duration:</span> {act.duration}</div>
                    <div className="mb-1 text-gray-700 dark:text-neutral-300"><span className="font-bold">Pick up:</span> {act.pickup}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Activities; 