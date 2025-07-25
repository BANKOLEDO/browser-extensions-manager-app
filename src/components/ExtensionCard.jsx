import React, { useState } from "react";

function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
  isTrashed,
}) {
  const imageUrl = new URL(`../assets/images/${logo}`, import.meta.url).href;
  const [localActive, setLocalActive] = useState(isActive);

  const handleToggle = () => {
    setLocalActive(!localActive);
    setTimeout(() => {
      onToggle();
    }, 500);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 px-4 py-5 border dark:border-neutral-300 rounded-xl shadow-md flex flex-col justify-between gap-4 items-start m-auto w-full min-h-[200px] transition-opacity duration-500">
      
      {/* Top Section: Logo and Text */}
      <div className="flex items-start gap-4">
        <img src={imageUrl} alt={name} className="w-12 h-12" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg dark:text-white">{name}</h3>
          <p className="text-sm font-bold text-neutral-500 dark:text-neutral-400 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Remove/Add and Toggle */}
      <div className="flex w-full justify-between items-center">
        
        {/* Remove or Add Back Button */}
        <button
          onClick={onRemove}
          className={`px-3 py-2 text-sm rounded-2xl font-bold transition-colors duration-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-800
            ${
              isTrashed
                ? "bg-green-600 text-white hover:bg-green-700"
                : "border border-neutral-700 dark:border-neutral-0 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-0 hover:bg-red-600 dark:hover:bg-red-400 hover:text-white dark:hover:text-neutral-700"
            }`}
        >
          {isTrashed ? "Add Back" : "Remove"}
        </button>

        {/* Toggle Switch */}
        {!isTrashed && (
          <div className="flex items-center gap-4">
            <div
              role="switch"
              tabIndex={0}
              aria-checked={localActive}
              onClick={handleToggle}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle();
                }
              }}
              className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
                ${localActive ? "bg-red-700 dark:bg-red-400 hover:bg-red-400 dark:hover:bg-red-600" : "bg-neutral-400"}
                focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-800`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
                  ${localActive ? "translate-x-5" : "translate-x-0"}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExtensionCard;
