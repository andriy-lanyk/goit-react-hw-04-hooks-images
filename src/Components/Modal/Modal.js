import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Overlay, ModalDiv, IMG } from "./Modal.styles";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleClickOnBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImg, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalDiv>
          <IMG src={largeImg} alt={alt} />
        </ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
