import { IImage, TCategory, ITable } from "./shared";

export interface IMenuOption {
  value: string[] | ITable[];
  note: null | string;
}

export interface IMenu {
  id: number;
  name: string;
  category: TCategory[];
  basePrice: number;
  menuImage: IImage[];
  basicInfo: ITable[];
  detailInfo: {
    [key: string]: IMenuOption;
  };
}
