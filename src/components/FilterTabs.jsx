import React from "react";

function FilterTabs({ activeFilter, setFilter }) {
  const tabs = ["All", "Active", "Inactive"];

  return (
    <div className="flex justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-800
            ${
              activeFilter === tab
                ? "bg-red-700 dark:bg-red-400 text-white dark:text-neutral-800 hover:bg-red-400 dark:hover:bg-red-600"
                : "bg-neutral-0 dark:bg-neutral-700 dark:text-white border dark:border-neutral-600 shadow-2xl hover:text-neutral-600 dark:hover:bg-neutral-600"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
