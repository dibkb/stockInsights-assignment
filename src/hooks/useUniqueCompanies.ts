import { useEffect, useState } from "react";
// import { typeAnnouncement } from "../data/announcement";
const useUniqueCompanies = (props: string): returnType[] => {
  const [res, setRes] = useState<responseType[]>([]);
  const [modifiedRes, setModifiedRes] = useState<returnType[]>([]);
  useEffect(() => {
    fetch(
      `https://9a84ce1e-ff82-4b80-b2db-035d0769c3c2.mock.pstmn.io/api/stocks/search?attr=company_name&q=${props}&fields=company_name,bse_id`
    )
      .then((res) => res.json())
      .then((json) => {
        setRes(json.stocks);
      });
  }, [props]);
  useEffect(() => {
    if (res.length) {
      const modifiedUnique = res.map((str) => ({
        ...str,
        selected: false,
      }));
      setModifiedRes(modifiedUnique);
    }
  }, [res]);
  return modifiedRes;
};
type responseType = {
  company_name: string;
  company_id: string;
};
interface returnType extends responseType {
  selected: boolean;
}
export default useUniqueCompanies;
