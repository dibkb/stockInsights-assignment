import React, { useContext } from "react";
import { AlertContext } from "../context/AlertContext";
import { typeAnnouncement } from "../data/announcement";
import { Sentiment } from "./Announcementcomp";
import { AiOutlineFilePdf } from "react-icons/ai";
import { formatDate } from "../utils/utils";
const Allerts: React.FC = () => {
  // const { alerts } = useContext(AlertContext);
  const alerts: typeAnnouncement[] = [
    {
      company_name: "Megri Soft Ltd",
      exchange: "BSE",
      company_id: "539012",
      type: "Changes in management or control",
      type_id: "6",
      sub_type: "Appointment",
      summary:
        "Megri Soft Ltd appoints Vijay Kumar as Company Secretary and Compliance Officer.",
      sentiment: "neutral",
      published_time: "2023-04-30T21:28:00+05:30",
      source_url:
        "https://www.bseindia.com/xml-data/corpfiling/AttachLive/5a1612dc-2fdd-408f-850c-7caebd1cc9fb.pdf",
      created_at: "2023-05-03T21:28:00+05:30",
      created_by: "",
      significance: true,
    },
    {
      company_name: "BOSCH LTD.",
      exchange: "BSE",
      company_id: "500530",
      type: "Major investments or disinvestments",
      type_id: "15",
      sub_type: "Equity",
      summary:
        "Details of Loss of Certificate / Duplicate Certificate received by the Company.",
      sentiment: "neutral",
      published_time: "2023-04-30T21:18:00+05:30",
      source_url:
        "https://www.bseindia.com/xml-data/corpfiling/AttachLive/4a14d6f0-55a4-41fd-908d-9c3a1ed3f69c.pdf",
      created_at: "2023-05-03T20:48:04.061+00:00",
      created_by: "",
      significance: false,
    },
    {
      company_name: "RELIANCE POWER LTD.",
      exchange: "BSE",
      company_id: "532939",
      type: "Material defaults in payments",
      type_id: "15",
      sub_type: "Loan Defaults",
      summary:
        "RELIANCE POWER LTD. discloses default on payment of interest/ repayment of principal amount for loans",
      sentiment: "negative",
      published_time: "2023-04-29T21:18:00+05:30",
      source_url:
        "https://www.bseindia.com/xml-data/corpfiling/AttachLive/4e0350ec-1e84-4ff0-96fa-ab9ed6c30f4b.pdf",
      created_at: "2023-05-03T20:48:04.061+00:00",
      created_by: "",
      significance: true,
    },
  ];
  return (
    <>
      {alerts &&
        alerts.map((element: typeAnnouncement, id) => {
          return (
            <main
              key={JSON.stringify(element.summary + id)}
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
