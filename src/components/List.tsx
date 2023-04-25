import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Items } from "../data/ItemData";
const List: React.FC = () => {
  return (
    <div className="sm:container max-w-[90%] mx-auto">
      <p className="text-2xl font-bold my-9">Latest Concall Transcripts</p>
      <div className="flex flex-col gap-4 mb-12 sm:mb-9">
        {Items.map((element) => (
          <div key={element.id}>
            <span className="flex sm:justify-between items-start flex-col sm:flex-row ">
              <h1 className="mb-4 font-medium text-sky-600 flex items-center gap-2 cursor-pointer hover:underline">
                {element.title}
                <ArrowUpRightIcon className="h-5 w-5" />
              </h1>
              <span className="text-xs border border-stone-600 p-1 rounded-md cursor-pointer font-medium text-stone-600 mb-4 sm:mb-0 hover:bg-stone-800 hover:text-white">
                View Insights
              </span>
            </span>
            <p className="text-sm">{element.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
