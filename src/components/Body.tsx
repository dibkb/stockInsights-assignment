import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";
const Body: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-7xl my-9">Welcome to EquityGPT!</h1>
      <h3 className="text-stone-600 font-medium">
        You can now ask questions to search through Earnings Call Transcripts!
      </h3>
      <section className="flex gap-2 items-center my-5">
        <span className="text-amber-500 flex gap-2 items-center text-xs">
          <ExclamationTriangleIcon className="h-4 w-4 " />
          <p className="font-medium">Please Note</p>
        </span>
        <p className="text-xs text-stone-700">
          This is a beta version. We are in the process of adding more data and
          improving the search.
        </p>
      </section>
    </div>
  );
};

export default Body;
