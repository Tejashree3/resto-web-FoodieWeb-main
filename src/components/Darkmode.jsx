import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }, [theme, element]);

    return (
        <div className="relative">
            {/* Sun Icon for Light Mode */}
            <FaSun
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-8 h-8 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
                    theme === 'dark' ? 'opacity-0' : 'opacity-100'
                }`}
            />
            {/* Moon Icon for Dark Mode */}
            <FaMoon
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-8 h-8 cursor-pointer transition-all duration-300 ${
                    theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    );
};

export default DarkMode;
