import React, { useState, useCallback, useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { Datepicker, Filter, Searchbox } from "../components/Announcementcomp";
import AlertProvider from "../context/AlertContext";
import Allerts from "../components/Allerts";
import { arrayToId, arrayToName } from "../utils/utils";
const Announcement: React.FC = () => {
  const { alerts, setAlerts } = useContext(AlertContext);
  const [filteredCompanies, setFilteredCompanies] = useState<selected[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<
    selected[]
  >([]);
  const [filteredSentiments, setFilteredSentiments] = useState<selected[]>([]);
  const [applyFilter, setApplyFilter] = useState<boolean>(false);
  // const [filterApplied, setFilterApplied] = useState<boolean>(false);
  const applyFilters = useCallback(() => {
    const filterCompanyIdsString = arrayToId(filteredCompanies);
    const filterTypeIdsString = arrayToId(filteredAnnouncements);
    const filterSentimentsString = arrayToName(filteredSentiments);
    setApplyFilter(true);
    fetch(
      `https://9a84ce1e-ff82-4b80-b2db-035d0769c3c2.mock.pstmn.io/api/annoucements?ex=BSE&cid=${filterCompanyIdsString}&type=${filterTypeIdsString}&s=${filterSentimentsString}&from=2023-05-01&to=2023-05-01&page=1&o=20`
    )
      .then((res) => res.json())
      .then((json) => setAlerts(json.announcements.slice(1, 3)));
  }, [filteredCompanies, filteredAnnouncements, filteredSentiments, setAlerts]);
  return (
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
            applyFilters={applyFilters}
          />
          <Datepicker />
        </main>
        <h3 className="text-sm">Last Updated: 7 Jul, 14:04</h3>
      </main>
      {/* Filter Options */}
      {applyFilter && (
        <main className="mt-5 text-sm">
          <h3>
            {filteredCompanies[0].name}+{filteredCompanies.length - 1}
          </h3>
        </main>
      )}
      {/* Table */}
      <main className="flex flex-col gap-4 mt-9">
        <div className="hidden sm:flex justify-between items-start text-xs font-semibold uppercase border-b border-gray-300 pb-4">
          <h3 className="basis-[12.92%]">Company</h3>
          <h3 className="basis-[17.56%]">Announcement Type</h3>
          <h3 className="basis-[47.86%]">Announcement Summary</h3>
          <h3 className="basis-[9%]">Sentiment</h3>
          <h3 className="basis-[6.4%]">Source</h3>
        </div>
        {/* Alerts */}
        <Allerts />
      </main>
    </div>
  );
};
const AnnouncementWrapper: React.FC = () => {
  return (
    <AlertProvider>
      <Announcement />
    </AlertProvider>
  );
};
type selected = {
  name: string;
  id?: string;
};
export default AnnouncementWrapper;
