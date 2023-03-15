import { IImage, TCategory, TTable } from "./shared";

export interface IDesign {
  name: string;
  price: number;
  desc: string;
}

export interface IMenuOption {
  value: string[] | TTable[] | IDesign[];
  note: null | string;
}

export interface IMenu {
  id: number;
  name: string;
  category: TCategory[];
  basePrice: number;
  menuImage: IImage[];
  basicInfo: TTable[];
  detailInfo: {
    [key: string]: IMenuOption;
  };
}
