import React, { useState } from "react";
import { Datepicker, Filter, Searchbox } from "../components/Announcementcomp";
import AlertProvider from "../context/AlertContext";
import Allerts from "../components/Allerts";
const Announcement: React.FC = () => {
  const [filteredCompanies, setFilteredCompanies] = useState<string[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<string[]>(
    []
  );
  const [filteredSentiments, setFilteredSentiments] = useState<string[]>([]);
  return (
    <AlertProvider>
      <div>
        <h3 className="text-sm font-medium underline underline-offset-4 text-indigo-600 mt-4">
          Special Situation Tracker
        </h3>
        <main className="flex justify-between mt-9 items-center">
          <div>
            <h4>Total Announcements</h4>
            <h2 className="text-5xl mt-1">700</h2>
          </div>
          <main className="flex items-end gap-4">
            <Searchbox />
            <Filter
              setFilteredCompanies={setFilteredCompanies}
              setFilteredAnnouncements={setFilteredAnnouncements}
              setFilteredSentiments={setFilteredSentiments}
            />
            <Datepicker />
          </main>
          <h3 className="text-sm">Last Updated: 7 Jul, 14:04</h3>
        </main>
        {/* Table */}
        <main className="flex flex-col gap-4 mt-9">
          <div className="flex justify-between items-start text-xs font-semibold uppercase border-b border-gray-300 pb-4">
            <h3 className="basis-[12.92%]">Company</h3>
            <h3 className="basis-[14.56%]">Announcement Type</h3>
            <h3 className="basis-[50.86%]">Announcement Summary</h3>
            <h3 className="basis-[9%]">Sentiment</h3>
            <h3 className="basis-[6.4%]">Source</h3>
          </div>
          {/* Alerts */}
          <Allerts />
        </main>
      </div>
    </AlertProvider>
  );
};

export default Announcement;
