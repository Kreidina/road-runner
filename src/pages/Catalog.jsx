import { useEffect } from "react";

import CatalogList from "../components/CatalogList/CatalogList";
import { useDispatch } from "react-redux";
import { allCars } from "../redux/advetrs/operation";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCars());
  }, [dispatch]);

  return (
    <div>
      <CatalogList />
    </div>
  );
};

export default Catalog;
