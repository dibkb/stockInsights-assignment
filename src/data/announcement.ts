export const announcements: typeAnnouncement[] = [
  {
    id: "1",
    company: "Cnires Limited",
    type: "Major Contract Awards",
    summary: {
      title: "Contract Renewal",
      content:
        "Carysil renews contract with KARRAN INC. USA for supply of Quartz Kitchen sinks worth USD 68 million over 5 years",
    },
    sentiment: "Neutral",
    time: "7 Jul 14:04",
  },
  {
    id: "2",
    company: "Carysil Limited",
    type: "Major Contract Awards",
    summary: {
      title: "Contract Renewal",
      content:
        "Carysil renews contract with KARRAN INC. USA for supply of Quartz Kitchen sinks worth USD 68 million over 5 years",
    },
    sentiment: "Positive",
    time: "7 Jul 14:04",
  },
  {
    id: "2a",
    company: "Gemsi",
    type: "Major Contract Awards",
    summary: {
      title: "Contract Renewal",
      content:
        "Carysil renews contract with KARRAN INC. USA for supply of Quartz Kitchen sinks worth USD 68 million over 5 years",
    },
    sentiment: "Positive",
    time: "7 Jul 14:04",
  },
  {
    id: "3",
    company: "Carysil Limited",
    type: "Major Contract Awards",
    summary: {
      title: "Contract Renewal",
      content:
        "Carysil renews contract with KARRAN INC. USA for supply of Quartz Kitchen sinks worth USD 68 million over 5 years",
    },
    sentiment: "Negative",
    time: "7 Jul 14:04",
  },
  {
    id: "3a",
    company: "Gravita Limited",
    type: "Distribute Dividents",
    summary: {
      title: "Dividents",
      content:
        "Carysil renews contract with KARRAN INC. USA for supply of Quartz Kitchen sinks worth USD 68 million over 5 years",
    },
    sentiment: "Positive",
    time: "7 Jul 14:04",
  },
];

// export type typeAnnouncement = {
//   id: string;
//   company: string;
//   type: string;
//   sentiment: "Positive" | "Neutral" | "Negative";
//   summary: {
//     title: string;
//     content: string;
//   };
//   time: string;
// };
export type typeAnnouncement = {
  company_name: string;
  exchange: string;
  company_id: string;
  type: string;
  type_id: string;
  sub_type: string;
  summary: string;
  sentiment: "neutral" | "positive" | "negative";
  published_time: string;
  created_at: string;
  created_by: string;
  source_url: string;
  significance: boolean;
};
