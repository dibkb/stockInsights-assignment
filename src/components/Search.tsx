import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import React, { useCallback, useState } from "react";
import {
  timeOptionsList,
  timeOptions,
  stockOptionsList,
  stockOptions,
} from "../data/data";
import FilteredItem from "./FilteredItem";
// search bart import
import { SearchBar } from "./newSearchBar";
const Search: React.FC = () => {
  const [selectTime, setSelectTime] = useState<boolean>(false);
  const [selectStock, setSelectStock] = useState<boolean>(false);
  const [timeOptionsSelected, setTimeOptionsSelected] = useState<timeOptions[]>(
    []
  );
  const [timeOptions] = useState<timeOptions[]>(timeOptionsList);
  const [stockOptionsSelected, setStockOptionsSelected] = useState<
    stockOptions[]
  >([]);
  const [stockOptions] = useState<stockOptions[]>(stockOptionsList);
  const selectTimeItemHandler = useCallback(
    (element: timeOptions) => {
      const match = timeOptionsSelected.filter((items) => items === element);
      if (!match.length) {
        setTimeOptionsSelected((prev) => [...prev, element]);
        element.selected = true;
      } else {
        setTimeOptionsSelected((prev) =>
          prev.filter((item) => item !== element)
        );
        element.selected = false;
      }
    },
    [timeOptionsSelected]
  );
  const removeTimeItemHandler = useCallback((element: timeOptions) => {
    setTimeOptionsSelected((prev) => prev.filter((item) => item !== element));
    element.selected = false;
  }, []);
  const selectStockItemHandler = useCallback(
    (element: timeOptions) => {
      const match = stockOptionsSelected.filter((items) => items === element);
      if (!match.length) {
        setStockOptionsSelected((prev) => [...prev, element]);
        element.selected = true;
      } else {
        setStockOptionsSelected((prev) =>
          prev.filter((item) => item !== element)
        );
        element.selected = false;
      }
    },
    [stockOptionsSelected]
  );
  const removeStockItemHandler = useCallback((element: timeOptions) => {
    setStockOptionsSelected((prev) => prev.filter((item) => item !== element));
    element.selected = false;
  }, []);
  return (
    <div className="container mx-auto">
      <SearchBar />
      <div className=" flex gap-3">
        <span className="text-stone-800 flex gap-2 items-center">
          <AdjustmentsHorizontalIcon className="h-6 w-6 " />
          <p className="text-sm">Search within</p>
        </span>
        <div className="relative select-none">
          <section
            onClick={() => {
              setSelectTime((prev) => !prev);
            }}
            className="flex items-center justify-between w-[180px] border border-stone-300 p-2 rounded-lg cursor-pointer bg-stone-200 text-sm font-medium "
          >
            <p>Any time</p>
            {selectTime ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronUpIcon className="h-5 w-5" />
            )}
          </section>
          {selectTime && (
            <section className="absolute z-10 bg-white border w-full rounded-lg shadow-md flex flex-col">
              {timeOptions.map((element) => (
                <div
                  key={element.id}
                  onClick={() => selectTimeItemHandler(element)}
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
          )}
        </div>
        <div className="relative select-none">
          <section
            onClick={() => {
              setSelectStock((prev) => !prev);
            }}
            className="flex items-center justify-between w-[180px] border border-stone-300 p-2 rounded-lg cursor-pointer bg-stone-200 text-sm font-medium "
          >
            <p>Any stock</p>
            {selectStock ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronUpIcon className="h-5 w-5" />
            )}
          </section>
          {selectStock && (
            <section className="absolute z-10 bg-white border w-full rounded-lg shadow-md flex flex-col">
              <div className="px-4 py-2 flex items-center gap-1">
                <MagnifyingGlassIcon className="h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="max-w-[81%] grow p-1"
                />
              </div>
              {stockOptions.map((element) => (
                <div
                  key={element.id}
                  onClick={() => selectStockItemHandler(element)}
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
          )}
        </div>
      </div>
      <FilteredItem
        timeSelected={timeOptionsSelected}
        stockSelected={stockOptionsSelected}
        removeTimeItemHandler={removeTimeItemHandler}
        removeStockItemHandler={removeStockItemHandler}
      />
    </div>
  );
};

export default Search;
