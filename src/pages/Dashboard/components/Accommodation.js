import { useState } from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

const hotels = [
  {
    name: 'Shinagawa Prince Hotel',
    image: require('../../../assets/hotel1.png'),
    rating: 4.0,
    ratingText: 'Very Good',
    checkIn: '26.01.2025, 11:15 pm',
    checkOut: '28.01.2025, 11:15 am',
    nights: 2,
    status: 'Confirmed',
    statusColor: 'text-lime-500',
    statusIcon: <FaCheckCircle className="inline text-lime-500 text-lg align-middle" />,
  },
  {
    name: 'Mercure Tokyo Hotel',
    image: require('../../../assets/hotel2.png'),
    rating: 4.2,
    ratingText: 'Very Good',
    checkIn: '28.01.2025, 6:00 pm',
    checkOut: '30.01.2025, 11:15 am',
    nights: 2,
    status: 'Confirmed',
    statusColor: 'text-lime-500',
    statusIcon: <FaCheckCircle className="inline text-lime-500 text-lg align-middle" />,
  },
];

function HotelCard({ hotel }) {
  return (
    <div className="min-w-[320px] max-w-[320px] bg-white dark:bg-neutral-800 rounded-2xl shadow border border-gray-200 dark:border-neutral-700 p-0 m-2 flex-shrink-0">
      <div className="relative">
        <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover rounded-t-2xl border-b-4 border-blue-400" />
        <div className="absolute left-2 bottom-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1 font-semibold shadow">
          <FaStar className="text-yellow-300 text-sm" />
          {hotel.rating} <span className="ml-1 font-normal">{hotel.ratingText}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-lg mb-1 text-gray-800 dark:text-white" style={{fontFamily: 'Montserrat'}}>{hotel.name}</div>
        <div className="mb-1 text-gray-700 dark:text-white"><span className="font-bold">Check in:</span> {hotel.checkIn}</div>
        <div className="mb-1 text-gray-700 dark:text-white"><span className="font-bold">Check out:</span> {hotel.checkOut}</div>
        <div className="flex items-center gap-2 mt-3">
          <span className="font-bold text-gray-800 dark:text-white">{hotel.nights} Nights</span>
          <span className={`ml-auto flex items-center gap-1 font-semibold {hotel.statusColor}`}>{hotel.statusIcon} <span className={hotel.statusColor}>{hotel.status}</span></span>
        </div>
      </div>
    </div>
  );
}

function Accommodation() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-gray-900 dark:text-white text-2xl">Accomodation</span>
        <button className="text-sm font-bold underline text-indigo-600 dark:text-lime-300" onClick={() => setShowModal(true)}>See all</button>
      </div>
      <div className="flex overflow-x-auto pb-2 hide-scrollbar">
        {hotels.map((hotel, idx) => (
          <HotelCard hotel={hotel} key={idx} />
        ))}
      </div>
      {/* Modal for See All */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <button className="absolute top-2 right-2 text-lg font-bold text-gray-500 dark:text-neutral-300 hover:text-gray-800 dark:hover:text-white" onClick={() => setShowModal(false)}>&times;</button>
            <div className="text-xl font-bold mb-4 text-gray-900 dark:text-white">All Accomodations</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {hotels.map((hotel, idx) => (
                <HotelCard hotel={hotel} key={idx} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accommodation; 