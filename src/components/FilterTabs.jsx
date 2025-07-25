import React from "react";

export default function FilterTabs({ activeFilter, setFilter }) {
  const tabs = ["All", "Active", "Inactive"];

  return (
    <div className="flex justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            activeFilter === tab
              ? "bg-red-700 dark:bg-red-400 text-white dark:text-neutral-800"
              : "bg-neutral-0 dark:bg-neutral-700 dark:text-white border dark:border-neutral-600 shadow-2xl hover:text-neutral-600 hover:border-red-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
