import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Header = () => {
    const [dark, setDark] = useState(false);
    const toggleTheme = () => {
        setDark((prev) => {
            const newDark = !prev;
            if (newDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newDark;
        });
    };
    return(
        <div className="w-full max-w-[480px] mx-auto flex flex-col items-center justify-center relative mb-6">
            <div className="w-full flex items-center justify-between relative">
                <div className="flex-1 flex justify-center">
                    <h1 className="text-[27px] font-semibold text-center">Plan Your Journey, Your Way</h1>
                </div>
                <button
                    onClick={toggleTheme}
                    className="ml-4 p-2 rounded-full text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-neutral-800 focus:outline-none transition"
                    aria-label="Toggle dark mode"
                >
                    {dark ? <FiSun size={24} /> : <FiMoon size={24} />}
                </button>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-300 text-center mt-2">Let's create your personalised travel experience</p>
        </div>
    )
}