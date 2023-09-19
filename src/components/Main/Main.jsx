import { Link } from "react-router-dom";
import css from "./Main.module.css";
import { Plus } from "../../helpers/icons";

const Main = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Round-the-clock car rental in Ukraine</h1>
        <div className={css.box}>
          <div className={css.img}></div>
          <div className={css.infoContainer}>
            <h2 className={css.infoTitle}>
              We offer a wide selection of cars for your comfortable movement in
              the largest cities of Ukraine
            </h2>
            <ul className={css.list}>
              <li className={css.item}>
                <Plus />
                <span className={css.span}>
                  Our fleet consists of modern cars that can meet your needs
                </span>
              </li>
              <li className={css.item}>
                <Plus />
                <span className={css.span}>
                  We offer a car delivery service to the address you specify to
                  make the rental even more convenient.
                </span>
              </li>
              <li className={css.item}>
                <Plus />
                <span className={css.span}>
                  Picking up a car from us, you will quickly go on a trip, as
                  the transfer of the car usually takes only 8 minutes.
                </span>
              </li>
              <li className={css.item}>
                <Plus />
                <span className={css.span}>
                  Our team is ready to provide 24/7 support so you always have
                  access to help when you need it.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.btnContainer}>
          <h2 className={css.btnTitle}>
            Choose a comfortable car and enjoy a trip around Ukraine with us.
          </h2>
          <Link to={"/catalog"} className={css.btn}>
            Rental car
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
