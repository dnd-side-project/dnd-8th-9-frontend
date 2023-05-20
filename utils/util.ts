import { ROUTES } from "@/constants/routes";
import { IStoreListItem } from "@/types/api";

export const getOverallComment = (rating: number) => {
  if (rating >= 80) return "매우 높아요!";
  if (rating >= 60) return "훌륭해요!";
  if (rating >= 40) return "괜찮아요!";
  if (rating >= 20) return "아쉬워요";
  if (rating >= 0) return "별로예요";
  return "";
};

export const generatePriceString = (price: number) => {
  return `${price.toLocaleString()}원`;
};

export const generateRangePriceString = (minPrice: number, maxPrice: number, showText = true) => {
  return `${showText ? "기본" : ""} ${generatePriceString(minPrice)} ~ ${generatePriceString(
    maxPrice,
  )}`;
};

export const numberToRem = (num: number) => {
  return `${num / 10}rem`;
};

export const chunkArray = (data: IStoreListItem[], size = 3) => {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
};

export const parseDate = (date: string) => {
  return date.split(" ")[0].replaceAll("-", ".");
};

export const checkAuth = () => {
  let authenticated = false;

  try {
    const token = localStorage.getItem("access_token");
    if (token) {
      authenticated = true;
    } else {
      throw new Error("Access token not found");
    }
  } catch (error) {
    console.error("Error:", error);
    window.location.href = ROUTES.LOGIN_REDIRECT_PAGE;
  }

  return authenticated;
};

export const generateFilterPriceRangeOption = (min: number, max: number) => {
  const PRICE_UNIT = 10000;

  const minPrice = Math.floor(min / PRICE_UNIT);
  const maxPrice = Math.ceil(max / PRICE_UNIT);

  return `${minPrice}만원 ~ ${maxPrice}만원`;
};

export const parsePriceRangeToMinAndMaxPrice = (priceRange: string) => {
  const UNIT = 10000;
  if (!priceRange) return [-1, -1];
  const [min, max] = priceRange.split(" ~ ").map(str => {
    const num = Number(str.split("만원")[0]);
    return num * UNIT;
  });

  return [min, max];
};
