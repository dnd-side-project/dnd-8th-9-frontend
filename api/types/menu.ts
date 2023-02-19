import { IImage, TCategory, TTable } from "./shared";

export interface IMenuOption {
  id: number;
  type: string;
  value: string[] | TTable[];
  note: null | string;
}

export interface IMenu {
  id: number;
  name: string;
  category: TCategory[];
  basePrice: number;
  menuImage: IImage[];
  basicInfo: TTable[];
  detailInfo: IMenuOption[];
}
