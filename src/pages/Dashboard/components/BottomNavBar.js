import { useState } from 'react';
import { FiHome, FiSearch, FiPlus, FiHeart, FiUser } from 'react-icons/fi';

const navItems = [
  { icon: FiHome, label: 'Home' },
  { icon: FiSearch, label: 'Search' },
  { icon: FiPlus, label: 'Add' },
  { icon: FiHeart, label: 'Favorites' },
  { icon: FiUser, label: 'Profile' },
];

function BottomNavBar() {
  const [active, setActive] = useState(0);
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-[#fcfcfa] dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 flex justify-around items-center h-20">
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = idx === active;
        const isPlus = item.label === 'Add';
        return (
          <button
            key={item.label}
            className="flex flex-col items-center justify-center focus:outline-none"
            onClick={() => setActive(idx)}
            aria-label={item.label}
          >
            <span
              className={
                isActive
                  ? 'rounded-full p-3 ' +
                    (isPlus
                      ? 'bg-indigo-100 text-indigo-600 dark:bg-lime-300/20 dark:text-lime-300'
                      : 'bg-indigo-100 text-[#3646e3] dark:bg-lime-300/20 dark:text-lime-300')
                  : isPlus
                  ? 'p-3 text-indigo-600 dark:text-lime-300'
                  : 'p-3 text-gray-500 dark:text-gray-400'
              }
            >
              <Icon size={28} />
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNavBar; 