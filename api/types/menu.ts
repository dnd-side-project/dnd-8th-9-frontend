import { IImage, TCategory, ITable } from "./shared";

export interface IDesign {
  name: string;
  price: number;
  desc: string;
}

export interface IMenuOption {
  value: string[] | ITable[] | IDesign[];
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
