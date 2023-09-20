import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button";
import { selectAdverts, selectFavorite } from "../../redux/advetrs/selectors";
import { Location, filterArray } from "../../helpers/func";

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

  const location = Location();

  const advertsWithOutFav = useSelector(selectAdverts);
  const favoriteArray = useSelector(selectFavorite);
  let adverts = [...advertsWithOutFav];

  adverts = adverts.map((obj1) => {
    const obj2 = favoriteArray.find((obj2) => obj2.idAdverts === obj1.id);
    if (obj2) {
      const obj1WithFav = { ...obj1, favorite: true, idFav: obj2.id };
      return obj1WithFav;
    }
    return obj1;
  });

  const handelMore = () => {
    setVisible(visible + 8);
    setCurrentPage(currentPage + 1);
  };

  const onSubmit = (data) => {
    setDataValues(data);
    setCurrentPage(1);
    setVisible(8);
  };

  const funFilterArray = () => {
    if (location === "/road-runner/catalog") {
      const catalog = filterArray(adverts, dataValues);
      return catalog;
    } else if (location === "/road-runner/favorites") {
      const favoriteFilter = filterArray(favoriteArray, dataValues);
      return favoriteFilter;
    }
  };

  const advertsFilter = funFilterArray();

  useEffect(() => {
    const { selectBrand, selectPrice, mileage } = dataValues;
    const { from, to } = mileage;
    if (
      (advertsFilter.length === 0 && selectBrand !== "") ||
      (advertsFilter.length === 0 && selectPrice !== "") ||
      (advertsFilter.length === 0 && from !== "") ||
      (advertsFilter.length === 0 && to !== "")
    ) {
      setNothing(true);
    }
  }, [dataValues, advertsFilter]);

  return (
    <>
      <div className={css.container}>
        <Sidebar onSubmitData={onSubmit} setNothing={setNothing} />
        {!nothing ? (
          <>
            <ul className={css.list}>
              {advertsFilter.slice(0, visible).map((car) => (
                <CatalogItem key={car.id} car={car} />
              ))}
            </ul>

            {visible < advertsFilter.length ? (
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
        {location === "/road-runner/favorites" &&
          favoriteArray.length === 0 && (
            <div className={css.nothingBox}>
              <h1 className={css.nothingTitle}>
                You currently do not have any favorite ads. Add ads to favorites
                to see them here
              </h1>
            </div>
          )}
      </div>
    </>
  );
};

export default CatalogList;
