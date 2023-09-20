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
export const filterArray = (adverts, dataValues) => {
  const { selectBrand, selectPrice, mileage } = dataValues;
  const { from, to } = mileage;
  const FROM = Number(from);
  const TO = Number(to);
  const selectedPrice = Number(selectPrice.replace("$", ""));
  let filteredAdverts = [...adverts];

  filteredAdverts = filteredAdverts.filter((adv) => {
    const rentalPrice =
      Math.round(Number(adv.rentalPrice.replace("$", "")) / 10) * 10;

    if (selectBrand !== "" && adv.make !== selectBrand) {
      return false;
    }

    if (selectPrice !== "" && rentalPrice < selectedPrice) {
      return false;
    }

    if (from !== "" && adv.mileage < FROM) {
      return false;
    }

    if (to !== "" && adv.mileage > TO) {
      return false;
    }

    return true;
  });

  if (selectPrice !== "") {
    filteredAdverts.sort((a, b) => {
      const priceA = Number(a.rentalPrice.replace("$", ""));
      const priceB = Number(b.rentalPrice.replace("$", ""));
      return priceA - priceB;
    });
  }

  return filteredAdverts;
};
