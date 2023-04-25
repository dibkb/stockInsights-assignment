import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const stockContainerRef = useRef<HTMLDivElement>(null);
  const timeContainerRef = useRef<HTMLDivElement>(null);
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
  // ==========================handle outside click=====================
  const handleClickOutsideStock = (event: MouseEvent): void => {
    if (
      stockContainerRef.current &&
      !stockContainerRef.current.contains(event.target as Node)
    ) {
      setSelectStock(false);
    }
  };
  const handleClickOutsideTime = (event: MouseEvent): void => {
    if (
      timeContainerRef.current &&
      !timeContainerRef.current.contains(event.target as Node)
    ) {
      setSelectTime(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideStock, true);
    document.addEventListener("click", handleClickOutsideTime, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideStock, true);
      document.removeEventListener("click", handleClickOutsideTime, true);
    };
  });
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
  const resetAll = () => {
    timeOptions.forEach((item) => {
      item.selected = false;
    });
    stockOptions.forEach((item) => {
      item.selected = false;
    });
  };
  return (
    <div className="sm:container max-w-[90%] mx-auto">
      <SearchBar />
      <div className=" flex gap-3 flex-col sm:flex-row">
        <span className="text-stone-800 flex gap-2 items-center">
          <AdjustmentsHorizontalIcon className="h-6 w-6 " />
          <p className="text-sm">Search within</p>
        </span>
        <div className="flex gap-3">
          <div
            className="relative select-none flex-grow"
            ref={timeContainerRef}
          >
            <section
              onClick={() => {
                setSelectTime((prev) => !prev);
              }}
              className="flex items-center justify-between border sm:min-w-[190px] border-stone-300 p-2 rounded-lg cursor-pointer bg-stone-200 text-sm font-medium "
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
          <div
            className="relative select-none flex-grow"
            ref={stockContainerRef}
          >
            <section
              onClick={() => {
                setSelectStock((prev) => !prev);
              }}
              className="flex items-center justify-between border sm:min-w-[190px] border-stone-300 p-2 rounded-lg cursor-pointer bg-stone-200 text-sm font-medium "
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
      </div>
      <FilteredItem
        timeSelected={timeOptionsSelected}
        stockSelected={stockOptionsSelected}
        removeTimeItemHandler={removeTimeItemHandler}
        removeStockItemHandler={removeStockItemHandler}
        clearAll={() => {
          setStockOptionsSelected([]);
          setTimeOptionsSelected([]);
          resetAll();
        }}
      />
    </div>
  );
};

export default Search;
