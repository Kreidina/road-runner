import { Field, Formik, Form } from "formik";
import PropTypes from "prop-types";

import { schema } from "../../helpers/schemas";
import { priceSelect } from "../../helpers/func";
import css from "./Sidebar.module.css";
import { Down } from "../../helpers/icons";
import { brands } from "../../helpers/brands";

const initialValues = {
  selectBrand: "",
  selectPrice: "",
  mileage: { from: "", to: "" },
};

const Sidebar = ({ onSubmitData, setNothing }) => {
  const scoresArray = priceSelect();

  const onSubmit = (value) => {
    onSubmitData(value);
    setNothing(false);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <>
              <Form className={css.form}>
                <div className={css.selectBox}>
                  <label className={css.selectLabel}>Car brand</label>
                  <div className={css.box}>
                    <Field
                      component="select"
                      name="selectBrand"
                      className={`${css.select} ${css.selectBrand}`}
                    >
                      <option value="" className={css.option}>
                        Enter the text
                      </option>
                      {brands.map((brand, index) => (
                        <option
                          key={index}
                          value={brand}
                          className={css.option}
                        >
                          {brand}
                        </option>
                      ))}
                    </Field>
                    <Down className={css.icon} />
                  </div>
                </div>
                <div className={css.selectBox}>
                  <label className={css.selectLabel}>Price/ 1 hour</label>
                  <div className={css.box}>
                    <label htmlFor="price" className={css.labelPrice}>
                      To
                    </label>
                    <Field
                      component="select"
                      name="selectPrice"
                      id="price"
                      className={`${css.select} ${css.selectPrice}`}
                    >
                      <option value="" className={css.option}>
                        {" "}
                        $
                      </option>
                      {scoresArray.map((score, index) => (
                        <option
                          key={index}
                          value={score}
                          className={css.option}
                        >
                          {score}
                        </option>
                      ))}
                    </Field>
                    <Down className={css.icon} />
                  </div>
                </div>
                <div className={css.selectBox}>
                  <label className={css.selectLabel}>Сar mileage / km</label>
                  <div className={css.box}>
                    <div className={css.mileageInput}>
                      <label htmlFor="from" className={css.labelMileage}>
                        From
                      </label>
                      <Field
                        type="number"
                        id="from"
                        name="mileage.from"
                        className={`${css.select} ${css.input} ${css.inputFrom}`}
                        autocomlete="off"
                      />
                    </div>
                    <div className={css.mileageInput}>
                      <label htmlFor="To" className={css.labelMileage}>
                        To
                      </label>
                      <Field
                        type="numder"
                        id="To"
                        name="mileage.to"
                        className={`${css.select} ${css.input} ${css.inputTo}`}
                        autocomlete="off"
                      />
                    </div>
                  </div>
                </div>
                <button className={css.btn} type="submit">
                  Search
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Sidebar;
Sidebar.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  setNothing: PropTypes.func.isRequired,
};
