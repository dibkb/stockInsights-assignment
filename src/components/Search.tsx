import { SparklesIcon } from "@heroicons/react/20/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
const timeOptions = [
  { id: 1, value: "Q1 FY22" },
  { id: 2, value: "Q2 FY22" },
  { id: 3, value: "Q3 FY22" },
  { id: 4, value: "Q4 FY22" },
  { id: 5, value: "Q1 FY23" },
];
const timeDropDownContent = timeOptions.map((element) => (
  <div key={element.id}>
    <p className="text-sm font-medium">{element.value}</p>
  </div>
));
const Search: React.FC = () => {
  const [selectTime, setSelectTime] = useState<boolean>(false);
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
          <ChevronDownIcon className="h-5 w-5" />
        </section>
        {selectTime && (
          <section className="absolute border w-full px-4 py-2 rounded-lg">
            {timeDropDownContent}
          </section>
        )}
      </div>
    </div>
  );
};

export default Search;
