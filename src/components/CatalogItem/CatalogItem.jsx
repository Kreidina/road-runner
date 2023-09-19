import PropTypes from "prop-types";
import { useState } from "react";

import { FillHeart, Heart } from "../../helpers/icons";
import ModalContainer from "../ModalContainer/ModalContainer";
import css from "./CatalogItem.module.css";
import Button from "../Button";
import { fetchChangeFavorite } from "../../servises/apiCars";
import LearnMore from "../LearnMore/LearnMore";

const CatalogItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    accessories,
    address,
    img,
    rentalCompany,
    rentalPrice,
    favorite,
  } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = address.split(",");
  const city = address.split(",")[1];
  const country = location[2];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // console.log(rentalPrice);

  const changeFavorite = async (car) => {
    const newValue = JSON.stringify({ favorite: !favorite });
    await fetchChangeFavorite(car.id, newValue);
  };

  return (
    <>
      <li className={css.itemContainer}>
        <div className={css.imgBox}>
          <img src={img} alt={make} className={css.img} />
          <Button
            type="button"
            onClick={() => changeFavorite(car)}
            className={css.iconBtn}
          >
            {favorite ? (
              <FillHeart className={`${css.icon} ${css.fiilIcon}`} />
            ) : (
              <Heart className={css.icon} />
            )}
          </Button>
        </div>
        <div className={css.infoBox}>
          <div className={css.titleBox}>
            <p className={css.title}>
              {make} <span className={css.span}>{model}</span>, {year}
            </p>
            <p className={css.price}>{rentalPrice}</p>
          </div>
          <ul className={css.list}>
            <li className={css.item}>
              {city} <span className={css.line}></span>
            </li>

            <li className={css.item}>
              {country} <span className={css.line}></span>
            </li>
            <li className={css.item}>
              {rentalCompany}
              <span className={css.line}></span>
            </li>
            <li className={css.item}>
              {type}
              <span className={css.line}></span>
            </li>
            <li className={css.item}>
              {model} <span className={css.line}></span>
            </li>
            <li className={css.item}>
              {id} <span className={css.line}></span>
            </li>
            <li className={css.item}>{accessories[0]}</li>
          </ul>
        </div>
        <Button type="button" onClick={toggleModal} className={css.btn}>
          Learn more
        </Button>
      </li>
      {isModalOpen && (
        <ModalContainer toggleModal={toggleModal}>
          <LearnMore car={car} />
        </ModalContainer>
      )}
    </>
  );
};

export default CatalogItem;
CatalogItem.propTypes = {
  car: PropTypes.shape({
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
  }).isRequired,
};
