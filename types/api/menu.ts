import { IImage, TCategory } from "./shared";

export interface IMenuBasicInfo {
  맛: string;
  레터링: string;
  사이즈: string;
}

// NOTE: description 필요
export interface IMenuDetails {
  id: number;
  name: string;
  basePrice: number;
  category: TCategory[];
  menuImages: IImage[];
  basicInfo: IMenuBasicInfo;
  detailInfo: string;
}

// NOTE: links 필요
export interface IMenuListItem {
  id: number;
  name: string;
  category: TCategory[];
  price: number;
  menuImages: IImage[];
  reviewCount: number;
  bookmarkCount: number;
  storeId: number;
  storeName: string;
  canPickup: boolean;
  canDelivery: boolean;
}
