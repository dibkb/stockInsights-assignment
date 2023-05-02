import React from "react";
import { Datepicker, Filter, Searchbox } from "../components/Announcementcomp";
const Announcement: React.FC = () => {
  return (
    <div>
      <h3 className="text-sm font-medium underline underline-offset-4 text-indigo-600 mt-4">
        Special Situation Tracker
      </h3>
      <main className="flex items-end gap-4 mt-9">
        <div>
          <h4>Total Announcements</h4>
          <h2 className="text-5xl">700</h2>
        </div>
        <Searchbox />
        <Filter />
        <Datepicker />
      </main>
    </div>
  );
};

export default Announcement;
