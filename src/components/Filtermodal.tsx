import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const Filtermodal: React.FC = () => {
  return (
    <div className="absolute bg-white border top-[120%] left-0 p-4 shadow-md rounded-md">
      <main className="flex whitespace-nowrap gap-9">
        <h3 className="font-medium">Company :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1">
          All Companies <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
    </div>
  );
};

export default Filtermodal;
