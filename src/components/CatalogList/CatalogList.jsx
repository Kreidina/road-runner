import PropTypes from "prop-types";
import { useState } from "react";

import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button";

const initialValues = {
  selectBrand: "",
  selectPrice: "",
  mileage: { from: "", to: "" },
};

const CatalogList = ({ adverts }) => {
  const [visible, setVisible] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataValues, setDataValues] = useState(initialValues);

  const handelMore = () => {
    setVisible(visible + 8);
    setCurrentPage(currentPage + 1);
  };

  const onSubmit = (data) => {
    setDataValues(data);
    setCurrentPage(1);
    setVisible(8);
  };

  const filterAdverts = () => {
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

  const filter = filterAdverts();
  // console.log(filter);
  return (
    <>
      <div className={css.container}>
        <Sidebar onSubmitData={onSubmit} />
        {filter.length > 0 ? (
          <>
            <ul className={css.list}>
              {filter.slice(0, visible).map((car) => (
                <CatalogItem key={car.id} car={car} />
              ))}
            </ul>

            {visible < filter.length ? (
              <Button type="button" onClick={handelMore} className={css.btn}>
                Load more
              </Button>
            ) : (
              <div className={css.marg}></div>
            )}
          </>
        ) : (
          <div>sdsdfsf</div>
        )}
      </div>
    </>
  );
};

export default CatalogList;

CatalogList.propTypes = {
  adverts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      img: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      rentalConditions: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      favorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
