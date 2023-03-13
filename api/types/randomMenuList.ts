import { ILink } from "./shared";

export interface IRandomMenuItem {
  id: number;
  name: string;
  menuImage: string;
  summary: string;
  price: number;
  storeName: string;
  links: ILink[];
  canDelivery: boolean;
  canPickup: boolean;
}
