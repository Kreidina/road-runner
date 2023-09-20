import PropTypes from "prop-types";

import css from "./LearnMore.module.css";

const LearnMore = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    address,
    img,
    fuelConsumption,
    engineSize,
    rentalPrice,
    accessories,
    description,
    functionalities,
    mileage,
    rentalConditions,
  } = car;

  const parts = rentalConditions.split("\n");
  const part = parts[0].split(":");

  const location = address.split(",");
  const city = address.split(",")[1];
  const country = location[2];

  const mile = mileage.toLocaleString("en-US");

  const price = rentalPrice.replace("$", "");

  return (
    <div>
      <img src={img} alt={make} className={css.img} />
      <div className={css.infoBox}>
        <p className={css.title}>
          {make} <span className={css.span}>{model}</span>, {year}
        </p>
        <ul className={css.list}>
          <li className={css.item}>
            {city}
            <span className={css.line}></span>
          </li>

          <li className={css.item}>
            {country}
            <span className={css.line}></span>
          </li>
          <li className={css.item}>
            Id: {id}
            <span className={css.line}></span>
          </li>
          <li className={css.item}>
            Year: {year}
            <span className={css.line}></span>
          </li>
          <li className={css.item}>
            Type: {type}
            <span className={css.line}></span>
          </li>
          <li className={css.item}>
            Fuel Consumption: {fuelConsumption}
            <span className={css.line}></span>
          </li>
          <li className={css.item}>Engine Size: {engineSize}</li>
        </ul>
      </div>
      <p className={css.description}>{description}</p>
      <div className={css.accesBox}>
        <p className={`${css.text} ${css.accesText}`}>
          Accessories and functionalities:
        </p>
        <ul className={css.accessoriesList}>
          {accessories.map((item, index) => (
            <li key={item} className={css.item}>
              {item}
              {index < 2 && <span className={css.line}></span>}
            </li>
          ))}
        </ul>
        <ul className={css.accessoriesList}>
          {functionalities.map((item, index) => (
            <li key={item} className={css.item}>
              {item}
              {index < 2 && <span className={css.line}></span>}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.rentalContainer}>
        <p className={`${css.text} ${css.rentalText}`}>Rental Conditions:</p>
        <ul className={css.rentalList}>
          <li className={css.rentalItem}>
            Minimum age: <span className={css.accent}>{part[1]}</span>
          </li>
          <li className={css.rentalItem}>{parts[1]}</li>
          <li className={css.rentalItem}>{parts[2]}</li>
          <li className={css.rentalItem}>
            Mileage: <span className={css.accent}>{mile}</span>
          </li>
          <li className={css.rentalItem}>
            Price: <span className={css.accent}>{price}$</span>
          </li>
        </ul>
      </div>
      <a href="tel:+380730000000" className={css.rentalLink}>
        Rental car
      </a>
    </div>
  );
};

export default LearnMore;
LearnMore.propTypes = {
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
  }).isRequired,
};
