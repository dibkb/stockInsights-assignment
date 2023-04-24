import React from "react";
import { timeOptions } from "../data/data";
import { XMarkIcon } from "@heroicons/react/20/solid";
const FilteredItem: React.FC<FilteredItem> = ({ timeSelected }) => {
  return (
    <div className="flex gap-3">
      {timeSelected.map((element) => (
        <span className="text-sm flex gap-1 items-center border border-stone-500 px-4 py-2 rounded-full">
          <XMarkIcon className="h-5 w-5" />
          <p>{element.value}</p>
        </span>
      ))}
    </div>
  );
};
interface FilteredItem {
  timeSelected: timeOptions[];
}
export default FilteredItem;
