import { FiArrowUpRight } from 'react-icons/fi';
import { MdAccessTime, MdGroups, MdEventNote } from 'react-icons/md';

const cityImage = require('../../../assets/tokyo.png');

const UpcomingTrip = ({ totalActivities }) => (
  <div className="rounded-3xl bg-white dark:bg-slate-800 p-0 shadow-xl w-full max-w-xl mx-auto">
    <div className="relative rounded-3xl overflow-hidden h-[340px]">
      <img src={cityImage} alt="Tokyo" className="object-cover w-full h-full absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-6">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none drop-shadow-lg">TOKYO</div>
              <div className="text-base sm:text-lg font-medium text-white/90 mt-2">27.01.2025 - 02.02.2025</div>
            </div>
            <FiArrowUpRight className="text-white/80 bg-black/30 rounded-full p-1 mt-1" size={28} />
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="bg-neutral-800/80 dark:bg-neutral-700/80 rounded-full p-2"><MdAccessTime className="text-lime-300" size={20} /></span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white">8 Days</span>
              <span className="text-xs text-white/80">Duration</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-neutral-800/80 dark:bg-neutral-700/80 rounded-full p-2"><MdGroups className="text-lime-300" size={20} /></span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white">4 (2M,2F)</span>
              <span className="text-xs text-white/80">Group Size</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-neutral-800/80 dark:bg-neutral-700/80 rounded-full p-2"><MdEventNote className="text-lime-300" size={20} /></span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white">{totalActivities}</span>
              <span className="text-xs text-white/80">Activities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UpcomingTrip; 