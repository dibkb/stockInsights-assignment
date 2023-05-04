import { typeAnnouncement } from "../data/announcement";
const useUniqueSentiment = (alerts: typeAnnouncement[]): returnType => {
  const companyUnique = [
    ...new Set(
      alerts.map((item: typeAnnouncement) => {
        return item.sentiment;
      })
    ),
  ];
  const modifiedUnique = companyUnique.map((str) => ({
    value: str,
    selected: false,
  }));
  return modifiedUnique;
};
type returnType = {
  value: string;
  selected: boolean;
}[];
export default useUniqueSentiment;
