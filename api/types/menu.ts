export interface IMenuOption {
  id: number;
  type: string;
  value: string | TTable[];
  note: null;
}

export type TTable = { [key: string]: string };

export type TCategory = "꽃" | "캐릭터/입체" | "기타" | "포토" | "레터링";

export interface IMenu {
  id: number;
  name: string;
  basePrice: number;
  menuImage: string;
  caution: string;
  description: string;
  category: TCategory[];
  menuOptions: IMenuOption[];
}
