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

  const parts = rentalConditions.split("/n");

  console.log(parts);

  const location = address.split(",");
  const city = address.split(",")[1];
  const country = location[2];
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
      <div>
        <p>Accessories and functionalities:</p>
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
      <div>
        <p>Rental Conditions:</p>
        <ul>
          <li>Minimum age:</li>
          <li>Valid driver’s license</li>
          <li>Security deposite required</li>
          <li>Mileage:{mileage}</li>
          <li>Price:{rentalPrice}</li>
        </ul>
      </div>
      <a href="tel:+380730000000">Rental car</a>
    </div>
  );
};

export default LearnMore;
LearnMore.propTypes = {
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
