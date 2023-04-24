import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import React, { useState } from "react";
import {
  timeOptionsList,
  timeOptions,
  stockOptionsList,
  stockOptions,
} from "../data/data";
const Search: React.FC = () => {
  const [selectTime, setSelectTime] = useState<boolean>(false);
  const [selectStock, setSelectStock] = useState<boolean>(false);
  const [timeOptionsSelected, setTimeOptionsSelected] = useState<timeOptions[]>(
    []
  );
  const [stockOptionsSelected, setStockOptionsSelected] = useState<
    stockOptions[]
  >([]);
  const toggleElement = (element: timeOptions) => {
    element.selected = !element.selected;
  };
  return (
    <div className="container mx-auto flex gap-3">
      <span className="text-stone-800 flex gap-2 items-center">
        <AdjustmentsHorizontalIcon className="h-6 w-6 " />
        <p className="text-sm">Filter search</p>
      </span>
      <div className="relative">
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
          <section className="absolute border w-full rounded-lg shadow-md flex flex-col">
            {timeOptionsList.map((element) => (
              <div
                key={element.id}
                onClick={() => {
                  setTimeOptionsSelected((prev) => [...prev, element]);
                  toggleElement(element);
                }}
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
      <div className="relative">
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
          <section className="absolute border w-full rounded-lg shadow-md flex flex-col">
            {stockOptionsList.map((element) => (
              <div
                key={element.id}
                onClick={() => {
                  setStockOptionsSelected((prev) => [...prev, element]);
                  toggleElement(element);
                }}
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
  );
};

export default Search;
