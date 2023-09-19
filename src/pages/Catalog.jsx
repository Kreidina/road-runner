import { useEffect } from "react";
import { useState } from "react";
import { fetchCars } from "../servises/apiCars";
import CatalogList from "../components/CatalogList/CatalogList";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const cars = fetchCars();
    cars.then((car) => {
      setAdverts(car);
    });
  }, []);

  return (
    <div>
      <CatalogList adverts={adverts} />
    </div>
  );
};

export default Catalog;
