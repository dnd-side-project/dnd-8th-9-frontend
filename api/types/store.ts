import { IImage, TCategory, TTable } from "./shared";

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
  links: {
    kakao?: string;
    instagram?: string;
  };
  orderForm: string;
  storeImages: IImage[];
  notice: {
    packaging: { name: string; value: string[] }[];
    pickupHours: { day: string; hour: string }[];
    noticeInfo: {
      profileImage: string;
      date: number;
      content: string;
    };
    info: {
      sellerInfo: TTable[];
      foodInfo: TTable[];
    };
  };
}
