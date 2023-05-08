import { IItem } from "./IItem";

export const selectableMockedData: IItem[] = [
  { id: "1", name: "name 1" },
  { id: "2", name: "name 2" },
  { id: "3", name: "name 3" },
  { id: "4", name: "name 4" },
  { id: "5", name: "name 5" },
  { id: "6", name: "name 6" },
];

export const selectableMockedDataAsync = (): Promise<IItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(selectableMockedData);
    }, 2000);
  });
};
