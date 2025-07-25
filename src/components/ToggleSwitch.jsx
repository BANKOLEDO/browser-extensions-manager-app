import { useEffect, useState } from 'react';
import SunIcon from '../assets/images/icon-sun.svg';
import MoonIcon from '../assets/images/icon-moon.svg';


function ToggleSwitch() {
    const [darkMode, setDarkMode] = useState(() => 
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);


    return (
        <button onClick={() => setDarkMode(!darkMode)} className="transition duration-300">
            <img
                src={darkMode ? SunIcon : MoonIcon}
                alt="Toggle theme"
                className="w-12 h-12 p-3 rounded-md bg-neutral-100 dark:bg-neutral-700"
            />
        </button>
    );
}

export default ToggleSwitch;