export interface ILocation {
  id: number;
  name: string;
  storeCounts: number;
  label?: "BEST" | "HOT";
}
