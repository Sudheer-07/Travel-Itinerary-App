import { useState } from 'react';

const flights = [
  {
    fromCode: 'DEL',
    fromCity: 'Delhi, India',
    toCode: 'NRT',
    toCity: 'Narita, Tokyo',
    date: '26.01.2025, 10:50 am',
    image: require('../../../assets/plane.png'),
  },
  {
    fromCode: 'BOM',
    fromCity: 'Mumbai, India',
    toCode: 'DXB',
    toCity: 'Dubai, UAE',
    date: '27.01.2025, 09:00 am',
    image: require('../../../assets/plane.png'),
  },
];

function FlightDetails() {
  const [showModal, setShowModal] = useState(false);
  const flight = flights[0];
  return (
    <div className="relative rounded-2xl bg-[#3646e3] dark:bg-indigo-700 px-5 py-2 w-full max-w-xl mx-auto min-h-[180px] overflow-hidden flex flex-col" style={{fontFamily: 'Montserrat'}}>
      <div className="flex items-center justify-between z-10">
        <span className="text-white text-xl font-semibold">Flight Details</span>
        <button className="text-lime-300 dark:text-yellow-300 underline font-semibold text-base" onClick={() => setShowModal(true)}>See all</button>
      </div>
      <div className="text-white text-base mb-2 z-10">{flight.date}</div>
      <div className="absolute right-0 bottom-0 h-20 sm:h-32 w-2/3 z-0 pointer-events-none select-none flex items-end justify-end">
        <img src={flight.image} alt="plane" className="w-full h-full object-contain" />
      </div>
      <div className="flex-1" />
      <div className="relative z-10 w-[60%] ml-0 flex items-end justify-between gap-2 pb-2">
        <div className="flex flex-col items-start flex-1 min-w-0">
          <span className="text-white text-2xl font-semibold leading-tight">{flight.fromCode}</span>
          <span className="text-white text-sm mt-1 truncate">{flight.fromCity}</span>
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <span className="text-white text-3xl font-extrabold">→</span>
        </div>
        <div className="flex flex-col items-start flex-1 min-w-0">
          <span className="text-white text-2xl font-semibold leading-tight">{flight.toCode}</span>
          <span className="text-white text-sm mt-1 truncate">{flight.toCity}</span>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
            <button className="absolute top-2 right-2 text-lg font-bold text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" onClick={() => setShowModal(false)}>&times;</button>
            <div className="text-xl font-bold mb-4 text-gray-900 dark:text-white">All Flight Details</div>
            <div className="flex flex-col gap-4">
              {flights.map((f, idx) => (
                <div key={idx} className="relative rounded-2xl bg-[#3646e3] dark:bg-indigo-700 px-5 py-4 w-full min-h-[140px] overflow-hidden flex flex-col mb-2" style={{fontFamily: 'Montserrat'}}>
                  <div className="flex items-center justify-between mb-2 z-10">
                    <span className="text-white text-lg font-semibold">Flight Details</span>
                  </div>
                  <div className="text-white text-base mb-2 z-10">{f.date}</div>
                  <div className="absolute right-0 bottom-0 h-20 w-2/3 z-0 pointer-events-none select-none flex items-end justify-end">
                    <img src={f.image} alt="plane" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1" />
                  <div className="relative z-10 flex items-end justify-between w-full gap-2 pb-2">
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="text-white text-xl font-extrabold leading-tight">{f.fromCode}</span>
                      <span className="text-white text-xs mt-1 truncate">{f.fromCity}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center px-2">
                      <span className="text-white text-2xl font-extrabold">→</span>
                    </div>
                    <div className="flex flex-col items-end flex-1 min-w-0">
                      <span className="text-white text-xl font-extrabold leading-tight">{f.toCode}</span>
                      <span className="text-white text-xs mt-1 truncate">{f.toCity}</span>
                    </div>
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

export default FlightDetails; 