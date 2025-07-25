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

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <button
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); // prevent scrolling on space
          handleToggle();
        }
      }}
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={darkMode}
      tabIndex={0}
      className={`transition duration-300 outline-none 
        focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
        focus:ring-offset-white dark:focus:ring-offset-neutral-800 
        rounded-md`}
    >
      <img
        src={darkMode ? SunIcon : MoonIcon}
        alt=""
        aria-hidden="true"
        className="w-12 h-12 p-3 bg-neutral-100 dark:bg-neutral-700 rounded-md hover:bg-neutral-500 dark:hover:bg-neutral-500"
      />
    </button>
  );
}

export default ToggleSwitch;
