import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const Filtermodal: React.FC = () => {
  return (
    <div className="absolute w-96 bg-white border top-[120%] left-0 p-4 shadow-md rounded-md">
      {/* Company */}
      <main className="flex whitespace-nowrap gap-6">
        <h3 className="font-medium">Company :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1">
          All Companies <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      {/* Announcemnet */}
      <main className="flex whitespace-nowrap gap-6 mt-3">
        <h3 className="font-medium">Announcemnet :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1">
          All Announcemnets <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      {/* Sentiment */}
      <main className="flex whitespace-nowrap gap-6 mt-3">
        <h3 className="font-medium">Sentiment :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1">
          All Sentiments <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      <button className="bg-indigo-600 rounded-md text-white py-2 px-4 mt-4 flex">
        Apply Filter
      </button>
    </div>
  );
};

export default Filtermodal;
