import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, FunnelIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Filtermodal from "./Filtermodal";
import { typeAnnouncement } from "../data/announcement";
export const Searchbox: React.FunctionComponent = () => {
  return (
    <div className="border shadow-md text-sm rounded-md py-2 px-4 flex gap-2 items-center">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
      <input type="text" placeholder="Search" className="w-40" />
    </div>
  );
};

export const Filter: React.FC<Filterprop> = ({ alert }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShowFilter((prev) => !prev)}
        className="cursor-pointer select-none border shadow-md text-sm rounded-md py-2 px-4 flex gap-2 items-center"
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
    <div className="cursor-pointer select-none border shadow-md text-sm rounded-md py-2 px-4 flex gap-2 items-center">
      <CalendarDaysIcon className="h-5 w-5 text-gray-600" />
      <h3 className="text-gray-800 font-medium">1 Aug 2020 - 7 Jul</h3>
    </div>
  );
};

export const Sentiment: React.FC<Sentimentprop> = ({ type }) => {
  if (type === "Positive")
    return (
      <div className="bg-positiveBg text-green-800 font-medium rounded-md p-1 px-2 w-min">
        Positive
      </div>
    );
  else if (type === "Neutral")
    return (
      <div className="bg-neutralBg text-amber-600 font-medium rounded-md p-1 px-2 w-min">
        Neutral
      </div>
    );
  else
    return (
      <div className="bg-negativeBg text-red-600 font-medium rounded-md p-1 px-2 w-min">
        Negative
      </div>
    );
};
interface Sentimentprop {
  type: "Positive" | "Neutral" | "Negative";
}
interface Filterprop {
  alert: typeAnnouncement[];
}
