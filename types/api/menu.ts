import { IImage, ILink, ITable, TCategory } from "./shared";

export interface IDesign {
  name: string;
  price: number;
  desc: string;
}

export interface IMenuOption {
  value: string[] | ITable[] | IDesign[];
  note: null | string;
}

export interface IDetailInfo {
  [key: string]: IMenuOption;
}

export interface IMenuBasicInfo {
  맛: string;
  레터링: string;
  사이즈: string;
  [key: string]: string;
}

export interface IMenuDetails {
  id: number;
  name: string;
  basePrice: number;
  category: TCategory[];
  menuImages: IImage[];
  basicInfo: IMenuBasicInfo;
  detailInfo: string;
  storeId: number;
  storeName: string;
}

export interface IMenuListItem {
  id: number;
  name: string;
  price: number;
  menuImages: IImage[];
  storeId: number;
  storeName: string;
  links: ILink[];
}

export interface IStoreMenuListItem {
  id: number;
  storeId: number;
  storeName: string;
  name: string;
  basePrice: number;
  desc: string;
  menuImages?: IImage[];
}
