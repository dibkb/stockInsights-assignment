import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, FunnelIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Filtermodal from "./Filtermodal";
export const Searchbox: React.FunctionComponent = () => {
  return (
    <div className="border shadow-sm text-sm rounded-md py-2 px-4 flex gap-2 items-center">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
      <input type="text" placeholder="Search" className="w-40" />
    </div>
  );
};

export const Filter: React.FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShowFilter((prev) => !prev)}
        className="cursor-pointer select-none border shadow-sm text-sm rounded-md py-2 px-4 flex gap-2 items-center"
      >
        <FunnelIcon className="h-5 w-5 text-gray-600" />
        <h3 className="text-gray-800 font-medium">Filter</h3>
      </div>
      {showFilter && <Filtermodal />}
    </div>
  );
};
export const Datepicker: React.FC = () => {
  return (
    <div className="cursor-pointer select-none border shadow-sm text-sm rounded-md py-2 px-4 flex gap-2 items-center">
      <CalendarDaysIcon className="h-5 w-5 text-gray-600" />
      <h3 className="text-gray-800 font-medium">1 Aug 2020 - 7 Jul</h3>
    </div>
  );
};
