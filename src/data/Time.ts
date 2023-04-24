export const timeOptionsList: timeOptions[] = [
  { id: 1, value: "Q1 FY22", selected: false },
  { id: 2, value: "Q2 FY22", selected: false },
  { id: 3, value: "Q3 FY22", selected: false },
  { id: 4, value: "Q4 FY22", selected: false },
  { id: 5, value: "Q1 FY23", selected: false },
];
export interface timeOptions {
  id: number;
  value: string;
  selected: boolean;
}
