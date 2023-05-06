import { create } from "zustand";
import { IImage } from "@/types/api/shared";

interface FormMenuStore {
  id: number;
  name: string;
  menuImage: string;

  setMenu: (menu: IMenu) => void;
}

interface IMenu {
  id: number;
  name: string;
  menuImage: string;
}

interface FormSizeDangdoStore {
  size: string;
  dangdo: number;

  setSizeDangdo: ({ size, dangdo }: ISizeDangdo) => void;
}

interface ISizeDangdo {
  size: string;
  dangdo: number;
}

interface FormDetailStore {
  best: string;
  comment: string;
  // imgFiles: (string | ArrayBuffer | null)[];
  imgFiles: IImage[];

  setDetail: ({ best, comment, imgFiles }: IDetail) => void;
}

interface IDetail {
  best: string;
  comment: string;
  // imgFiles: (string | ArrayBuffer | null)[];
  imgFiles: IImage[];
}

interface ButtonDisabledStore {
  isDisabled: boolean;

  setButtonDisabled: () => void;
  setButtonAbled: () => void;
}

export const useFormMenuStore = create<FormMenuStore>()(set => ({
  id: 0,
  name: "",
  menuImage: "",

  setMenu: (menu: IMenu) => set({ id: menu.id, name: menu.name, menuImage: menu.menuImage }),
}));

export const useFormSizeDangdoStore = create<FormSizeDangdoStore>()(set => ({
  size: "",
  dangdo: 0,

  setSizeDangdo: ({ size, dangdo }: ISizeDangdo) => set({ size, dangdo }),
}));

export const useFormDetailStore = create<FormDetailStore>()(set => ({
  best: "",
  comment: "",
  imgFiles: [],

  setDetail: ({ best, comment, imgFiles }: IDetail) => set({ best, comment, imgFiles }),
}));

export const useButtonDisabledStore = create<ButtonDisabledStore>()(set => ({
  isDisabled: true,

  setButtonDisabled: () => set({ isDisabled: true }),
  setButtonAbled: () => set({ isDisabled: false }),
}));
