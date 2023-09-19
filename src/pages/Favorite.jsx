import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CatalogList from "../components/CatalogList/CatalogList";
import { allCars } from "../redux/advetrs/operation";

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCars());
  }, [dispatch]);

  return <CatalogList />;
};

export default Favorite;
