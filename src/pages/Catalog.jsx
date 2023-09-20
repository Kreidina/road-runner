import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CatalogList from "../components/CatalogList/CatalogList";
import { allCars, allFavorites } from "../redux/advetrs/operation";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allFavorites());
  }, [dispatch]);

  return <CatalogList />;
};

export default Catalog;
