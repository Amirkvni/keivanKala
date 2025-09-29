export const priceFormatter = (price) => {
  const priceStr = price.toString();
  const formatted = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${formatted}تومان`;
};
