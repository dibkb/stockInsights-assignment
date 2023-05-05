type selected = {
  name: string;
  id?: string;
};
export const formatDate = (date: string): string => {
  const newDate = new Date(String(date));
  const dateString = newDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return dateString;
};
export const arrayToId = (array: selected[]): string => {
  let str = "";
  array.forEach((element) => {
    str += element.id + ",";
  });
  return str;
};
export const arrayToName = (array: selected[]): string => {
  let str = "";
  array.forEach((element) => {
    str += element.name + ",";
  });
  return str;
};
