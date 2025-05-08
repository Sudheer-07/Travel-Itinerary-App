import { useState, useEffect } from 'react';
import { FiSettings, FiSun, FiMoon } from 'react-icons/fi';

function getInitialTheme() {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
}

const Greeting = () => {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <div className="flex items-center justify-between w-full p-2">
            <div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">Hello Chhavi!</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ready for the trip?</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-yellow-300 focus:outline-none transition-colors"
                    aria-label="Toggle theme"
                >
                    {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-lg font-bold text-black">C</div>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-orange-400 dark:text-orange-300 transition-colors"><FiSettings size={20} /></button>
            </div>
        </div>
    );
}

export default Greeting; 