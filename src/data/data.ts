export const timeOptionsList: timeOptions[] = [
  { id: 1, value: "Q1 FY22", selected: false },
  { id: 2, value: "Q2 FY22", selected: false },
  { id: 3, value: "Q3 FY22", selected: false },
  { id: 4, value: "Q4 FY22", selected: false },
  { id: 5, value: "Q1 FY23", selected: false },
];
export const stockOptionsList: timeOptions[] = [
  { id: 1, value: "OLECTRA", selected: false },
  { id: 2, value: "TATA MOTORS", selected: false },
  { id: 3, value: "ASHOKLEY", selected: false },
  { id: 4, value: "JBMA", selected: false },
  { id: 5, value: "EICHERMOT", selected: false },
];
export interface timeOptions {
  id: number;
  value: string;
  selected: boolean;
}
export interface stockOptions {
  id: number;
  value: string;
  selected: boolean;
}
