import { IImage, TReviewOption } from "./shared";

// NOTE: date, like 필요
export interface IReviewListItem {
  id: number;
  menuName: string;
  content: string;
  dangdo: number;
  goodPoint: TReviewOption;
  reorder: boolean;
  reviewImages: IImage[];
  storeId: number;
  storeName: string;
  nickname: string;
  profileImage: string;
  date?: string;
  likes?: number;
}

export interface IReviewPayloadBody {
  menuId: number;
  storeId: number;
  content: string;
  dangdo: number;
  goodPoint: TReviewOption;
  reorder: boolean;
  files: File[];
}
