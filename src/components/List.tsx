import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Items } from "../data/ItemData";
const List: React.FC = () => {
  return (
    <div className="sm:container max-w-[90%] mx-auto">
      <p className="text-2xl font-bold my-9">Latest Concall Transcripts</p>
      <div className="flex flex-col gap-4">
        {Items.map((element) => (
          <div key={element.id}>
            <span className="flex justify-between items-start">
              <h1 className="mb-4 font-medium text-sky-600 flex items-center gap-3 cursor-pointer hover:underline">
                {element.title}
                <ArrowUpRightIcon className="h-5 w-5" />
              </h1>
              <span className="text-xs border border-stone-600 p-1 rounded-md cursor-pointer font-medium text-stone-600">
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
