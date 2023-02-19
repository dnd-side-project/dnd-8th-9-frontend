import { IImage, TCategory } from "./shared";

export interface IStoreItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  priceRange: { max: number; min: number };
  canPickup: boolean;
  canDelivery: boolean;
  category: TCategory[];
  storeImages: IImage[];
  links: {
    kakao?: string;
    instagram?: string;
  };
}
