import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderDiv } from "./Loader.styles";

function LoaderContainer() {
  return (
    <LoaderDiv>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000}
      />
    </LoaderDiv>
  );
}

export default LoaderContainer;
