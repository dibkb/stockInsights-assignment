import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { AlertContext } from "../context/AlertContext";
import useUniqueCompanies from "../hooks/useUniqueCompanies";
import { announcements } from "../data/announcement";
import useUniqueAnnouncement from "../hooks/useUniqueAnnouncement";
import useUniqueSentiment from "../hooks/useuseUniqueSentiments";
const RenderName: React.FC<RenderName> = ({
  value,
  selected,
  setFilteredList,
}) => {
  // const { alerts, setAlerts } = useContext(AlertContext);
  const [nameSelect, setComanySelect] = useState<boolean>(selected);
  useEffect(() => {
    if (nameSelect) {
      setFilteredList((prev) => [...prev, value]);
    } else {
      setFilteredList((prev) => prev.filter((item) => item !== value));
    }
  }, [nameSelect, setFilteredList, value]);
  return (
    <div
      onClick={() => {
        setComanySelect((prev) => !prev);
      }}
      className="cursor-pointer px-4 py-2 flex items-center gap-2 hover:bg-stone-100"
    >
      {nameSelect ? (
        <MdCheckBox className="text-blue-700" />
      ) : (
        <MdCheckBoxOutlineBlank />
      )}
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
};
const CompanyModal: React.FC<CompanyModal> = ({ setFilteredCompanies }) => {
  const { alerts } = useContext(AlertContext);
  const companies = useUniqueCompanies(announcements);
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
        <RenderName
          value={value}
          selected={selected}
          key={value}
          setFilteredList={setFilteredCompanies}
        />
      ))}
    </section>
  );
};
const AnnouncementModal: React.FC<AnnouncementModal> = ({
  setFilteredAnnouncements,
}) => {
  const types = useUniqueAnnouncement(announcements);
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
      {types.map(({ value, selected }) => (
        <RenderName
          value={value}
          selected={selected}
          key={value}
          setFilteredList={setFilteredAnnouncements}
        />
      ))}
    </section>
  );
};
const SentimentModal: React.FC<SentimentModal> = ({
  setFilteredSentiments,
}) => {
  const types = useUniqueSentiment(announcements);
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
      {types.map(({ value, selected }) => (
        <RenderName
          value={value}
          selected={selected}
          key={value}
          setFilteredList={setFilteredSentiments}
        />
      ))}
    </section>
  );
};
const Filtermodal: React.FC = () => {
  // const { alerts, setAlerts } = useContext(AlertContext);
  const [showCompanies, setShowCompanies] = useState<boolean>(false);
  const [showAnnouncements, setShowAnnouncements] = useState<boolean>(false);
  const [showSentiments, setShowSentiments] = useState<boolean>(false);
  const [filteredCompanies, setFilteredCompanies] = useState<string[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<string[]>(
    []
  );
  const [filteredSentiments, setFilteredSentiments] = useState<string[]>([]);
  return (
    <div className="absolute w-96 text-sm select-none bg-white border top-[120%] left-0 p-4 shadow-md rounded-md">
      {/* Company */}
      <main className="flex whitespace-nowrap gap-6 relative">
        <h3 className="font-medium">Company :</h3>
        <span
          className="flex items-center gap-9 border-b pb-1 cursor-pointer"
          onClick={() => {
            setShowCompanies((prev) => !prev);
            setShowAnnouncements(false);
            setShowSentiments(false);
          }}
        >
          <h3>All Companies</h3>
          {showCompanies ? (
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronUpIcon className="w-4 h-4 text-gray-600" />
          )}
        </span>
        {showCompanies && (
          <CompanyModal setFilteredCompanies={setFilteredCompanies} />
        )}
      </main>
      {/* Announcemnet */}
      <main className="flex whitespace-nowrap gap-6 mt-3 relative">
        <h3 className="font-medium">Announcemnet :</h3>
        <span
          className="flex items-center gap-9 border-b pb-1 cursor-pointer"
          onClick={() => {
            setShowAnnouncements((prev) => !prev);
            setShowCompanies(false);
            setShowSentiments(false);
          }}
        >
          <h3>All Announcements</h3>
          {showAnnouncements ? (
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronUpIcon className="w-4 h-4 text-gray-600" />
          )}
        </span>
        {showAnnouncements && (
          <AnnouncementModal
            setFilteredAnnouncements={setFilteredAnnouncements}
          />
        )}
      </main>
      {/* Sentiment */}
      <main className="flex whitespace-nowrap gap-6 mt-3 relative">
        <h3 className="font-medium">Sentiment :</h3>
        <span
          className="flex items-center gap-9 border-b pb-1 cursor-pointer"
          onClick={() => {
            setShowSentiments((prev) => !prev);
            setShowCompanies(false);
            setShowAnnouncements(false);
          }}
        >
          <h3>All Sentiments</h3>
          {showSentiments ? (
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronUpIcon className="w-4 h-4 text-gray-600" />
          )}
        </span>
        {showSentiments && (
          <SentimentModal setFilteredSentiments={setFilteredSentiments} />
        )}
      </main>
      <button className="bg-indigo-600 rounded-md text-white py-2 px-4 mt-4 flex hover:bg-indigo-700">
        Apply Filter
      </button>
    </div>
  );
};
type RenderName = {
  value: string;
  selected: boolean;
  setFilteredList: Dispatch<SetStateAction<string[]>>;
};
type CompanyModal = {
  setFilteredCompanies: Dispatch<SetStateAction<string[]>>;
};
type AnnouncementModal = {
  setFilteredAnnouncements: Dispatch<SetStateAction<string[]>>;
};
type SentimentModal = {
  setFilteredSentiments: Dispatch<SetStateAction<string[]>>;
};
export default Filtermodal;
