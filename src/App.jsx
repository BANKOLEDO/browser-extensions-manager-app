import React, { useState } from "react";
import ExtensionCard from "./components/ExtensionCard";
import Header from "./components/Header";
import FilterTabs from "./components/FilterTabs";
import extensionData from "./data/extensions.json";
import { Trash2 } from "lucide-react";

export default function App() {
  const [extensions, setExtensions] = useState(extensionData);
  const [removed, setRemoved] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showTrash, setShowTrash] = useState(false);

  // Toggle active status
  const handleToggleStatus = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  // Remove
  const handleRemove = (name) => {
    const toRemove = extensions.find((ext) => ext.name === name);
    setRemoved((prev) => [...prev, toRemove]);
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  // Restore from trash
  const handleRestore = (name) => {
    const toRestore = removed.find((ext) => ext.name === name);
    setExtensions((prev) => [...prev, toRestore]);
    setRemoved((prev) => prev.filter((ext) => ext.name !== name));
  };

  // Filter
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "All") return true;
    return filter === "Active" ? ext.isActive : !ext.isActive;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 p-6 text-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <Header />
        <div className="flex flex-col md:flex-row justify-between items-center  gap-6">
          <h1 className="text-3xl font-extrabold text-neutral-800 dark:text-neutral-0">Extensions List</h1>
        <FilterTabs activeFilter={filter} setFilter={setFilter} />
        </div>

        {/* Active extensions */}
        {!showTrash ? (
  <>
    {/* Extensions */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {filteredExtensions.length > 0 ? (
        filteredExtensions.map((ext) => (
          <ExtensionCard
            key={ext.name}
            {...ext}
            onToggle={() => handleToggleStatus(ext.name)}
            onRemove={() => handleRemove(ext.name)}
            isTrashed={false}
          />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No extensions found.
        </p>
      )}
    </div>
  </>
) : (
  <>
    {/* Trash Bin Content */}
    <h2 className="text-xl font-bold mb-4 dark:text-white">🗑️ Trash Bin</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {removed.length > 0 ? (
        removed.map((ext) => (
          <ExtensionCard
            key={ext.name}
            {...ext}
            onToggle={() => {}}
            onRemove={() => handleRestore(ext.name)}
            isTrashed={true}
          />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          Trash bin is empty.
        </p>
      )}
    </div>
  </>
)}

        {/* Floating Trash Toggle Button */}
        <button
          onClick={() => setShowTrash((prev) => !prev)}
          className="fixed bottom-6 right-6 z-50 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Toggle Trash Bin"
        >
        <Trash2 className="w-5 h-5 text-neutral-800 dark:text-neutral-100" />
        </button>
      </div>
    </div>
  );
}
