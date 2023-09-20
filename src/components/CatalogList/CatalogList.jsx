import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button";
import { selectAdverts } from "../../redux/advetrs/selectors";
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
  const adverts = useSelector(selectAdverts);

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

  const favoriteArray = adverts.filter((advert) => advert.favorite === true);
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
      </div>
    </>
  );
};

export default CatalogList;
