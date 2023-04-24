import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import React, { useState } from "react";
export const SearchBar: React.FC = () => {
  const [keywordSearch, setKeywordSearch] = useState<boolean>(false);
  return (
    <div className="my-9 ">
      <div className="border border-stone-300 rounded-lg py-3 px-6 flex gap-3">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          type="text"
          placeholder="Enter any question here"
          className="flex-grow"
        />
      </div>
      <div
        className="ml-auto w-fit text-sm font-medium flex items-center gap-2 mt-2"
        onClick={() => setKeywordSearch((prev) => !prev)}
      >
        <p>Restrict to keyword search</p>
        {keywordSearch ? (
          <BsToggleOff size={27} className="text-stone-300" />
        ) : (
          <BsToggleOn size={27} className="text-sky-600" />
        )}
      </div>
    </div>
  );
};
