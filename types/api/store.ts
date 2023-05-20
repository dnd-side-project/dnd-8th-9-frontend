import { TCategory, IImage, ILink, IKeyValue } from "./shared";

export interface INotice {
  packaging: { name: string; value: string[] }[];
  pickupHours: IKeyValue;
  noticeInfo: {
    profileImage: string;
    date: string;
    content: string;
  };
}

export interface IInfo {
  sellerInfo: IKeyValue;
  foodInfo: IKeyValue;
}

export interface IOrderForm {
  value: string;
  placeholder: string;
}

export interface IReviewStats {
  맛있어요: number;
  "응답이 빨라요": number;
  "가성비가 좋아요": number;
  친절해요: number;
  "선물하기 좋아요": number;
}

export interface IStoreListItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  bookmarkCount: number;
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
  orderForm: null | IKeyValue;
  businessHours: null | IKeyValue;
  notice: null | INotice;
  info: null | IInfo;
  reviewStats: IReviewStats;
  phone: null | string;
  minOrderDue: number;
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
