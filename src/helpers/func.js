import { useLocation } from "react-router-dom";

export const Location = () => {
  const location = useLocation();
  const pathSegments = location.pathname;
  return pathSegments;
};

export const priceSelect = () => {
  const array = [];
  for (let i = 30; i <= 150; i += 10) {
    array.push(`${i}$`);
  }

  return array;
};
