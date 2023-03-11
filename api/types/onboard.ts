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
