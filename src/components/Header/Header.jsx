import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css";
import { LogoRoadRunner } from "../Logo";
import { Phone } from "../../helpers/icons";

const Header = () => {
  return (
    <div className={css.container}>
      <Link to={"/road-runner/"} className={css.logoLink}>
        <LogoRoadRunner />
      </Link>
      <div className={css.nav}>
        <NavLink
          to={"/road-runner/catalog"}
          className={({ isActive }) =>
            isActive ? `${css.active} ${css.navLink}` : css.navLink
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to={"/road-runner/favorites"}
          className={({ isActive }) =>
            isActive ? `${css.active} ${css.navLink}` : css.navLink
          }
        >
          Favorite
        </NavLink>
      </div>
      <a href="tel:+380730000000" className={css.telLink}>
        <Phone />
        <span className={css.span}> +380730000000</span>
      </a>
    </div>
  );
};

export default Header;
