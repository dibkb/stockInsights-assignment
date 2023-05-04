import { typeAnnouncement } from "../data/announcement";
const useUniqueAnnouncement = (alerts: typeAnnouncement[]): returnType => {
  const companyUnique = [
    ...new Set(
      alerts.map((item: typeAnnouncement) => {
        return {
          type: item.type,
          type_id: item.type_id,
        };
      })
    ),
  ];
  const modifiedUnique = companyUnique.map((str) => ({
    ...str,
    selected: false,
  }));
  return modifiedUnique;
};
type returnType = {
  type: string;
  type_id: string;
  selected: boolean;
}[];
export default useUniqueAnnouncement;
