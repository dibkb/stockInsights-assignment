import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import {
  Datepicker,
  Filter,
  Searchbox,
  Sentiment,
} from "../components/Announcementcomp";
import { announcements, typeAnnouncement } from "../data/announcement";
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
      {/* Table */}
      <main className="flex flex-col gap-4 mt-9">
        <div className="flex justify-between items-start text-xs font-semibold uppercase border-b border-gray-300 pb-4">
          <h3 className="basis-[12.92%]">Company</h3>
          <h3 className="basis-[14.56%]">Announcement Type</h3>
          <h3 className="basis-[50.86%]">Announcement Summary</h3>
          <h3 className="basis-[9%]">Sentiment</h3>
          <h3 className="basis-[6.4%]">Source</h3>
        </div>
        {announcements.map((element: typeAnnouncement) => {
          return (
            <main
              key={element.id}
              className="flex gap-4 whitespace-nowrap justify-between items-start text-sm border-b border-gray-300 pb-4 cursor-pointer"
            >
              <h3 className="font-medium text-base basis-[12.92%]">
                {element.company}
              </h3>
              <div className="basis-[14.56%]">
                <h3 className="bg-gray-200 rounded-md px-3 py-1 w-min">
                  {element.type}
                </h3>
              </div>
              <div className="basis-[50.86%]">
                <h3 className="font-semibold">{element.summary.title}</h3>
                <h3 className="mt-1 whitespace-normal">
                  {element.summary.content}
                </h3>
              </div>
              <div className="basis-[9%]">
                <Sentiment type={element.sentiment} />
              </div>
              <div className="basis-[6.4%] flex flex-col items-center gap-2">
                <AiOutlineFilePdf size={20} className={""} />
                <h3 className="text-xs">{element.time}</h3>
              </div>
            </main>
          );
        })}
      </main>
    </div>
  );
};

export default Announcement;
