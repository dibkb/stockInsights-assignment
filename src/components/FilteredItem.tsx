import React from "react";
import { timeOptions } from "../data/data";
const FilteredItem: React.FC<FilteredItem> = ({ timeSelected }) => {
  return (
    <div>
      {timeSelected.map((element) => (
        <span>{element.value}</span>
      ))}
    </div>
  );
};
interface FilteredItem {
  timeSelected: timeOptions[];
}
export default FilteredItem;
