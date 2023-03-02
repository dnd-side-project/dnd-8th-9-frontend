export interface IRandomMenuItem {
  id: number;
  name: string;
  menuImage: string;
  summary: string;
  price: number;
  storeName: string;
  links: {
    [key: string]: string;
  };
}
