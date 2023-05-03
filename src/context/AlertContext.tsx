import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
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
  const [alerts, setAlerts] = useState<typeAnnouncement[]>(announcements);
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
