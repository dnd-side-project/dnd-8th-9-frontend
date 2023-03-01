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

export const generateRangePriceString = (minPrice: number, maxPrice: number) => {
  return `기본 ${generatePriceString(minPrice)} ~ ${generatePriceString(maxPrice)}`;
};
