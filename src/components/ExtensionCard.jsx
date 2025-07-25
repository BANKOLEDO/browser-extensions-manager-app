import React, { useState } from "react";

export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
  isTrashed,
}) {
  const imageUrl = new URL(`../assets/images/${logo}`, import.meta.url).href;

  // Local state for immediate UI toggle
  const [localActive, setLocalActive] = useState(isActive);

  const handleToggle = () => {
    // Instant visual feedback
    setLocalActive(!localActive);

    // Delayed update to parent (filters etc.)
    setTimeout(() => {
      onToggle(); // communicate with App.jsx
    }, 500);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 px-10 py-5 border dark:border-neutral-300 rounded-xl shadow-md flex flex-col gap-4 items-start m-auto w-full transition-opacity duration-500">
      {/* Top Section: Logo and Text */}
      <div className="flex items-center gap-4">
        <img src={imageUrl} alt={name} className="w-12 h-12" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg dark:text-white">{name}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Buttons */}
      <div className="flex w-full justify-between items-center py-1">
        {/* Remove or Add Back Button */}
        <button
          onClick={onRemove}
          className={`mt-4 px-3 py-2 text-sm rounded-2xl font-bold transition-colors duration-300
            ${
              isTrashed
                ? "bg-green-600 text-white hover:bg-green-700"
                : "border border-neutral-700 dark:border-neutral-0 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-0 hover:bg-red-600 hover:text-white focus:border-red-600"
            }`}       
        >
          {isTrashed ? "Add Back" : "Remove"}
        </button>

        {/* Toggle Switch */}
        {!isTrashed && (
          <div className="mt-4 flex items-center gap-4">
            <div
              onClick={handleToggle}
              className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
              ${localActive ? "bg-red-700 dark:bg-red-400" : "bg-neutral-400"}`}
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
