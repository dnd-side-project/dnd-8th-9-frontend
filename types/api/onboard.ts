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
  createdDate: number[];
  updatedDate: number[];
  id: number;
  email: string;
  nickname: string;
  active: boolean;
  storeBookmarkList: IStoreListItem[];
  menuBookmarkList: IMenuListItem[];
}

// NOTE: User 임시 응답값! -> 후 변경예정.
export interface IUserResponse {
  header: {
    code: number;
    message: string;
  };
  body: {
    user: IUser;
  };
}
