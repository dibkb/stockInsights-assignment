import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { announcements, typeAnnouncement } from "../data/announcement";
export interface AlertContextInterface {
  alerts: typeAnnouncement[];
  setAlerts: Dispatch<SetStateAction<typeAnnouncement[]>>;
}
const defaultState = {
  alerts: announcements,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAlerts: () => {},
} as AlertContextInterface;
export const AlertContext = createContext(defaultState);

type AlertProviderProps = {
  children: ReactNode;
};
export default function AlertProvider({ children }: AlertProviderProps) {
  const [alerts, setAlerts] = useState<typeAnnouncement[]>([]);
  useEffect(() => {
    fetch(
      "https://9a84ce1e-ff82-4b80-b2db-035d0769c3c2.mock.pstmn.io/api/annoucements?ex=BSE&cid=123,345&type=1,25&s=positive&from=2023-05-01&to=2023-05-01&page=2&o=20"
    )
      .then((res) => res.json())
      .then((json) => setAlerts(json.announcements))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <AlertContext.Provider
      value={{
        alerts,
        setAlerts,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
