import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { FillHeart, Heart } from "../../helpers/icons";
import ModalContainer from "../ModalContainer/ModalContainer";
import css from "./CatalogItem.module.css";
import Button from "../Button";
import LearnMore from "../LearnMore/LearnMore";
import { addFavorite, deleteFavorite } from "../../redux/advetrs/operation";
import { Location } from "../../helpers/func";

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

  const dispatch = useDispatch();
  const pathLocation = Location();

  const location = address.split(",");
  const city = address.split(",")[1];
  const country = location[2];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeFavorite = async (car) => {
    const { id, idFav, ...carWithOutId } = car;
    const body = JSON.stringify({
      idAdverts: id,
      ...carWithOutId,
      favorite: true,
    });
    if (!car.favorite) {
      dispatch(addFavorite(body));
    }
    if (car.favorite) {
      const deleteId = pathLocation === "/road-runner/favorites" ? id : idFav;
      dispatch(deleteFavorite(deleteId));
    }
  };

  const shouldModel = make.length + model.length > 18;

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
              {make} {!shouldModel && <span className={css.span}>{model}</span>}
              , {year}
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
            <li className={css.item}>
              {accessories.find((acc) => {
                return acc.length <= 28;
              })}
            </li>
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
    id: PropTypes.string.isRequired,
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
    favorite: PropTypes.bool,
    idFav: PropTypes.string,
  }).isRequired,
};
