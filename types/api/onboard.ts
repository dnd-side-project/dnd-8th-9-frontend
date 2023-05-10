import { IMenuListItem } from "./menu";
import { IStoreListItem } from "./store";

export interface ILocation {
  id: number;
  name: string;
  storeCounts: number;
  label?: "BEST" | "HOT";
}

export interface ICakeStyle {
  id: number;
  name: string;
  imageUrl: string;
}
export interface IUser {
  active: boolean;
  email: string;
  id: number;
  nickname: string;
  profileImg: string;
  roleType: string;
}
