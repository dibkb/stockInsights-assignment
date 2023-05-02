import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/solid";
import React from "react";
export const Searchbox: React.FunctionComponent = () => {
  return (
    <div className="border shadow-sm text-sm rounded-md py-2 px-4 flex gap-2 items-center">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
      <input type="text" placeholder="Search" className="w-40" />
    </div>
  );
};

export const Filter = () => {
  return (
    <div className="border shadow-sm text-sm rounded-md py-2 px-4 flex gap-2 items-center">
      <FunnelIcon className="h-5 w-5 text-gray-600" />
      <h3 className="text-gray-800 font-medium">Filter</h3>
    </div>
  );
};
