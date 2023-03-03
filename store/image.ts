import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IImage {
  id: number;
  url: string;
}

interface ImageState {
  currentImageSource: IImage[];
  currentImage: string;
  setImage: (reviewImages: IImage[]) => void;
}

const useImageStore = create<ImageState>()(
  devtools(set => ({
    currentImageSource: [],
    currentImage: "",
    setImage: (reviewImages: IImage[]) => set({ currentImageSource: reviewImages }),
  })),
);

export default useImageStore;
