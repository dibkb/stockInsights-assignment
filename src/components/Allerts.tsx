import React, { useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { typeAnnouncement } from "../data/announcement";
import { Sentiment } from "./Announcementcomp";
import { AiOutlineFilePdf } from "react-icons/ai";
const Allerts: React.FC = () => {
  const { alerts } = useContext(AlertContext);
  return (
    <>
      {alerts.map((element: typeAnnouncement) => {
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
            <div className="basis-[6.4%] flex flex-col gap-2">
              <AiOutlineFilePdf size={20} className={""} />
              <h3 className="text-xs">{element.time}</h3>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Allerts;