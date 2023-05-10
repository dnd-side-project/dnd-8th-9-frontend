import { TCategory, IKeyValue, ITime, IImage, ILink } from "./shared";

export interface INotice {
  packaging: { name: string; value: string[] }[];
  pickupHours: ITime[];
  noticeInfo: {
    profileImage: string;
    date: string;
    content: string;
  };
}

export interface IInfo {
  sellerInfo: IKeyValue[];
  foodInfo: IKeyValue[];
}

export interface IOrderForm {
  value: string;
  placeholder: string;
}

export interface IReviewStats {
  [key: string]: number;
}

export interface IStoreListItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceRange: {
    min: number;
    max: number;
  };
  links: ILink[];
  canPickup: boolean;
  canDelivery: boolean;
  category: TCategory[];
  storeImages: IImage[];
}

export interface IStoreDetails extends IStoreListItem {
  orderForm: null | IOrderForm[];
  notice: null | INotice;
  info: null | IInfo;
  reviewStats: IReviewStats;
}

export interface IStorePayloadBody {
  name: string;
  location: string;
  links: ILink[];
  canPickup: boolean;
  canDelivery: boolean;
  category: TCategory[];
  files: IImage[];
  orderForm: null | IOrderForm[];
  notice: null | INotice;
  info: null | IInfo;
}
