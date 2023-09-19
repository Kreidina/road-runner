import { Field, Formik, Form } from "formik";
import PropTypes from "prop-types";

import { schema } from "../../schemas";
import { priceSelect } from "../../helpers/func";
import css from "./Sidebar.module.css";
import { Down, Up } from "../../helpers/icons";
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
    // resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {/* {(props) => {
          console.log(props); */}
        {({ setFieldTouched, touched }) => {
          // console.log(touched.selectBrand);
          // console.log(values);
          return (
            <Form className={css.form}>
              <div className={css.selectBox}>
                <label className={css.selectLabel}>Car brand</label>
                <div className={css.box}>
                  <Field
                    as="select"
                    name="selectBrand"
                    className={`${css.select} ${css.selectBrand}`}
                    autocomlete="off"
                    onFocus={() => setFieldTouched({ selectBrand: true })}
                  >
                    <option value="">Enter the text</option>
                    {brands.map((brand, index) => (
                      <option key={index} value={brand} className={css.option}>
                        {brand}
                      </option>
                    ))}
                  </Field>
                  {/* <Up className={css.icon} /> */}

                  {touched.selectBrand ? (
                    <Up className={css.icon} />
                  ) : (
                    <Down className={css.icon} />
                  )}
                </div>
              </div>
              <div className={css.selectBox}>
                <label className={css.selectLabel}>Price/ 1 hour</label>
                <div className={css.box}>
                  <label htmlFor="price" className={css.labelPrice}>
                    To
                  </label>
                  <Field
                    as="select"
                    name="selectPrice"
                    id="price"
                    className={`${css.select} ${css.selectPrice}`}
                    autocomlete="off"
                  >
                    <option value=""> $</option>
                    {scoresArray.map((score, index) => (
                      <option key={index} value={score}>
                        {score}
                      </option>
                    ))}
                  </Field>
                  {/* <Down className={css.icon} /> */}
                  <Up className={css.icon} />
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
                      type="number"
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
          );
        }}
        {/* <input /> */}
      </Formik>
    </div>
  );
};

export default Sidebar;
Sidebar.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  setNothing: PropTypes.func.isRequired,
};
