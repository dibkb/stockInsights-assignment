import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { AlertContext } from "../context/AlertContext";
import useUniqueCompanies from "../hooks/useUniqueCompanies";
const CompanyModal: React.FC = () => {
  const { alerts } = useContext(AlertContext);
  const companies = useUniqueCompanies(alerts);
  return (
    <section className="absolute top-[100%] left-[20%] z-10 bg-white border w-min rounded-lg shadow-md flex flex-col py-4">
      <div className="px-4 flex items-center gap-1">
        <MagnifyingGlassIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search"
          className="max-w-[81%] grow p-1"
        />
      </div>
      {companies.map(({ value, selected }) => (
        <div
          key={value}
          className="cursor-pointer px-4 py-2 flex items-center gap-2 hover:bg-stone-100"
        >
          {selected ? (
            <MdCheckBox className="text-blue-700" />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
          <p className="text-sm font-medium">{value}</p>
        </div>
      ))}
    </section>
  );
};
const Filtermodal: React.FC = () => {
  const [showCompanies, setShowCompanies] = useState<boolean>(false);
  return (
    <div className="absolute w-96 text-sm select-none bg-white border top-[120%] left-0 p-4 shadow-md rounded-md">
      {/* Company */}
      <main className="flex whitespace-nowrap gap-6 relative">
        <h3 className="font-medium">Company :</h3>
        <span
          className="flex items-center gap-9 border-b pb-1 cursor-pointer"
          onClick={() => setShowCompanies((prev) => !prev)}
        >
          <h3>All Companies</h3>
          {showCompanies ? (
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronUpIcon className="w-4 h-4 text-gray-600" />
          )}
        </span>
        {showCompanies && <CompanyModal />}
      </main>
      {/* Announcemnet */}
      <main className="flex whitespace-nowrap gap-6 mt-3">
        <h3 className="font-medium">Announcemnet :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1 cursor-pointer">
          All Announcemnets <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      {/* Sentiment */}
      <main className="flex whitespace-nowrap gap-6 mt-3">
        <h3 className="font-medium">Sentiment :</h3>
        <h4 className="flex items-center gap-9 border-b pb-1 cursor-pointer">
          All Sentiments <ChevronUpIcon className="w-4 h-4 text-gray-600" />
        </h4>
      </main>
      <button className="bg-indigo-600 rounded-md text-white py-2 px-4 mt-4 flex hover:bg-indigo-700">
        Apply Filter
      </button>
    </div>
  );
};

export default Filtermodal;
