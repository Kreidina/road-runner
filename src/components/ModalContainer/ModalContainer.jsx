import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import css from "./ModalContainer.module.css";
import { CloseIcon } from "../../helpers/icons";

const modalContainer = document.getElementById("modal-root");

const ModalContainer = ({ toggleModal, children }) => {
  useEffect(() => {
    if (toggleModal) {
      document.body.style.overflow = "hidden";
    }
  }, [toggleModal]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const onBackdroplOpen = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <>
      <div onClick={onBackdroplOpen} className={css.modalBackdrop}>
        <div className={css.modalContent}>
          <button
            className={css.modalCloseBtn}
            type="button"
            onClick={toggleModal}
          >
            <CloseIcon className={css.iconClose} />
          </button>
          {children}
        </div>
      </div>
    </>,
    modalContainer
  );
};

ModalContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
