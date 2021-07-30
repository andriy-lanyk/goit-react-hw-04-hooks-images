import React from "react";
import PropTypes from "prop-types";
import { Btn } from "./Button.styles";

function Button({ click }) {
  return (
    <Btn type="button" onClick={click}>
      Load more...
    </Btn>
  );
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Button;
