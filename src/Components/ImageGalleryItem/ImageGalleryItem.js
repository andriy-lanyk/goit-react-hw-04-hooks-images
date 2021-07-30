import React from "react";
import PropTypes from "prop-types";
import { Image, GalleryItem } from "./ImageGalleryItem.styles";

function ImageGalleryItem({ id, url, name, openModal }) {
  return (
    <GalleryItem key={id}>
      <Image src={url} alt={name} data-id={id} onClick={openModal} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
