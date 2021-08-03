import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Overlay, ModalDiv, IMG } from "./Modal.styles";

const modalRoot = document.querySelector("#modal-root");

function Modal({ largeImg, alt, closeModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    if (e.code === "Escape") {
      closeModal();
    }
  }

  function handleClickOnBackdrop(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return createPortal(
    <Overlay onClick={handleClickOnBackdrop}>
      <ModalDiv>
        <IMG src={largeImg} alt={alt} />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
