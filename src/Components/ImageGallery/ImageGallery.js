import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import { List } from "./ImageGallery.styles";

function ImageGallery({ photos, click }) {
  return (
    <List>
      {photos &&
        photos.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            id={id}
            url={webformatURL}
            name={tags}
            openModal={click}
          />
        ))}
    </List>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default ImageGallery;
