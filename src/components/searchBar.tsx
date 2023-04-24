import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
export const SearchBar: React.FC = () => {
  return (
    <div className="border border-stone-300 rounded-lg p-2 my-9 flex gap-3">
      <MagnifyingGlassIcon className="h-7 w-7" />
      <input
        type="text"
        placeholder="Enter any question here"
        className="flex-grow"
      />
    </div>
  );
};
