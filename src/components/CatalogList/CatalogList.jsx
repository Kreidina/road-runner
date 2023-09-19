import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button";
import { selectAdverts } from "../../redux/advetrs/selectors";
import { Location } from "../../helpers/func";

const initialValues = {
  selectBrand: "",
  selectPrice: "",
  mileage: { from: "", to: "" },
};

const CatalogList = () => {
  const [visible, setVisible] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataValues, setDataValues] = useState(initialValues);
  const [nothing, setNothing] = useState(false);
  const adverts = useSelector(selectAdverts);
  // const isLoading = useSelector(selectIsLoading);
  // console.log(isLoading);
  const location = Location();

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

  useEffect(() => {
    const { selectBrand, selectPrice, mileage } = dataValues;
    const { from, to } = mileage;
    if (
      (filter.length === 0 && selectBrand !== "") ||
      (filter.length === 0 && selectPrice !== "") ||
      (filter.length === 0 && from !== "") ||
      (filter.length === 0 && to !== "")
    ) {
      setNothing(true);
    }
  }, [dataValues, filter]);

  const favorite = adverts.filter((advert) => advert.favorite === true);

  // console.log(filter);
  // console.log(favorite);

  return (
    <>
      <div className={css.container}>
        <Sidebar onSubmitData={onSubmit} setNothing={setNothing} />
        {!nothing ? (
          <>
            <ul className={css.list}>
              {location === "/road-runner/favorites"
                ? favorite
                    .slice(0, visible)
                    .map((car) => <CatalogItem key={car.id} car={car} />)
                : filter
                    .slice(0, visible)
                    .map((car) => <CatalogItem key={car.id} car={car} />)}
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
          <div className={css.nothingBox}>
            <h1 className={css.nothingTitle}>
              In response to your request, there are no adverts
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default CatalogList;
