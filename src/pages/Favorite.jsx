import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CatalogList from "../components/CatalogList/CatalogList";
import { allFavorites } from "../redux/advetrs/operation";

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allFavorites());
  }, [dispatch]);

  return <CatalogList />;
};

export default Favorite;
