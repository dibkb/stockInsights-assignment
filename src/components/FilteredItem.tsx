import React from "react";
import { stockOptions, timeOptions } from "../data/data";
import { XMarkIcon } from "@heroicons/react/20/solid";
const FilteredItem: React.FC<FilteredItem> = ({
  timeSelected,
  stockSelected,
  removeTimeItemHandler,
  removeStockItemHandler,
}) => {
  return (
    <div className="flex gap-3 mt-8">
      {timeSelected.map((element) => (
        <span
          onClick={() => removeTimeItemHandler(element)}
          key={element.value}
          className="cursor-pointer 
          text-sm flex gap-1 items-center border bg-zinc-200 hover:bg-zinc-300 border-zinc-300 px-4 py-2 rounded-full"
        >
          <XMarkIcon className="h-5 w-5" />
          <p>{element.value}</p>
        </span>
      ))}
      {stockSelected.map((element) => (
        <span
          onClick={() => removeStockItemHandler(element)}
          key={element.value}
          className="cursor-pointer text-sm flex gap-1 items-center bg-neutral-200 hover:bg-neutral-300 border border-neutral-300 px-4 py-2 rounded-full"
        >
          <XMarkIcon className="h-5 w-5" />
          <p>{element.value}</p>
        </span>
      ))}
    </div>
  );
};
interface FilteredItem {
  timeSelected: timeOptions[];
  stockSelected: stockOptions[];
  removeTimeItemHandler: (item: timeOptions) => void;
  removeStockItemHandler: (item: stockOptions) => void;
}
export default FilteredItem;
