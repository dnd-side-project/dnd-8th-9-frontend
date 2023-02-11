import { ICategory } from "./menu";
import { IImage } from "./review";

export interface IStoreItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  priceRange: { max: number; min: number };
  canPickup: boolean;
  canDelivery: boolean;
  category: ICategory[];
  storeImages: IImage[];
  links: {
    kakao?: string;
    instagram?: string;
  };
}
