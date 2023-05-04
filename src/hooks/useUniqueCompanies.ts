import { typeAnnouncement } from "../data/announcement";
const useUniqueCompanies = (alerts: typeAnnouncement[]): returnType => {
  const companyUnique = [
    ...new Set(
      alerts.map((item: typeAnnouncement) => {
        return item.company_name;
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
export default useUniqueCompanies;
