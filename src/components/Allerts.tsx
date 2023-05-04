import React, { useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { typeAnnouncement } from "../data/announcement";
import { Sentiment } from "./Announcementcomp";
import { AiOutlineFilePdf } from "react-icons/ai";
const Allerts: React.FC = () => {
  const { alerts } = useContext(AlertContext);
  const formatDate = (date: string): string => {
    const newDate = new Date(String(date));
    const dateString = newDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return dateString;
  };
  return (
    <>
      {alerts.map((element: typeAnnouncement) => {
        return (
          <main
            key={element.company_id + element.published_time}
            className="flex gap-4 whitespace-nowrap justify-between items-start text-sm border-b border-gray-300 pb-4 cursor-pointer"
          >
            <h3 className="font-medium text-base basis-[12.92%]">
              {element.company_name}
            </h3>
            <div className="basis-[17.56%]">
              <h3 className="bg-gray-200 rounded-md px-3 py-1 w-min">
                {element.type}
              </h3>
            </div>
            <div className="basis-[47.86%]">
              <h3 className="font-semibold">{element.sub_type}</h3>
              <h3 className="mt-1 whitespace-normal">{element.summary}</h3>
            </div>
            <div className="basis-[9%]">
              <Sentiment type={element.sentiment} />
            </div>
            <div className="basis-[6.4%] flex flex-col gap-2">
              <a href={element.source_url}>
                <AiOutlineFilePdf size={20} className={""} />
              </a>
              <h3 className="text-xs">{formatDate(element.created_at)}</h3>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Allerts;
