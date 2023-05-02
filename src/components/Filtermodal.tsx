import {
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { stockOptionsList } from "../data/data";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
const CompanyModal: React.FC = () => {
  return (
    <section className="absolute top-[100%] left-[20%] z-10 bg-white border w-min rounded-lg shadow-md flex flex-col">
      <div className="px-4 py-2 flex items-center gap-1">
        <MagnifyingGlassIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search"
          className="max-w-[81%] grow p-1"
        />
      </div>
      {stockOptionsList.map((element) => (
        <div
          key={element.id}
          // onClick={() => selectStockItemHandler(element)}
          className="cursor-pointer px-4 py-2 flex gap-2 hover:bg-stone-100"
        >
          {element.selected ? (
            <MdCheckBox className="text-blue-700" />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
          <p className="text-xs font-medium">{element.value}</p>
        </div>
      ))}
    </section>
  );
};
const Filtermodal: React.FC = () => {
  const [showCompanies, setShowCompanies] = useState<boolean>(false);
  return (
    <div className="absolute w-96 text-sm select-none bg-white border top-[120%] left-0 p-4 shadow-md rounded-md">
      {/* Company */}
      <main className="flex whitespace-nowrap gap-6 relative">
        <h3 className="font-medium">Company :</h3>
        <h4
          className="flex items-center gap-9 border-b pb-1 cursor-pointer"
          onClick={() => setShowCompanies((prev) => !prev)}
        >
          All Companies <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
        {showCompanies && <CompanyModal />}
      </main>
      {/* Announcemnet */}
      <main className="flex whitespace-nowrap gap-6 mt-3">
        <h3 className="font-medium">Announcemnet :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1 cursor-pointer">
          All Announcemnets <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      {/* Sentiment */}
      <main className="flex whitespace-nowrap gap-6 mt-3">
        <h3 className="font-medium">Sentiment :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1 cursor-pointer">
          All Sentiments <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      <button className="bg-indigo-600 rounded-md text-white py-2 px-4 mt-4 flex hover:bg-indigo-700">
        Apply Filter
      </button>
    </div>
  );
};

export default Filtermodal;
