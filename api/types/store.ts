import { IImage, TCategory, TKeyValue, ILink, ITime } from "./shared";

export interface IStore {
  id: number;
  name: string;
  location: string;
  geoLocation: { latitude: number; longtitude: number };
  category: TCategory[];
  rating: number;
  canPickup: boolean;
  canDelivery: boolean;
  priceRange: { max: number; min: number };
  averageReservationNeededTime: number;
  links: ILink[];
  orderForm: string;
  storeImages: IImage[];
  notice: {
    packaging: { name: string; value: string[] }[];
    pickupHours: ITime[];
    noticeInfo: {
      profileImage: string;
      date: string;
      content: string;
    };
  };
  info: {
    sellerInfo: TKeyValue[];
    foodInfo: TKeyValue[];
  };
}
