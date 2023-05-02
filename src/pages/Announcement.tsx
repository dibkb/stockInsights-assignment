import React from "react";
import { Datepicker, Filter, Searchbox } from "../components/Announcementcomp";
const Announcement: React.FC = () => {
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
          <Filter />
          <Datepicker />
        </main>
        <h3 className="text-sm">Last Updated: 7 Jul, 14:04</h3>
      </main>
    </div>
  );
};

export default Announcement;
