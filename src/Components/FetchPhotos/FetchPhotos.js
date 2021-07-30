import PropTypes from "prop-types";

const KEY = "22616220-eca5f4b2df7adfb59c540c753";

function fetchPhotos(query, numberOfPage) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${numberOfPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((res) => res.json());
}

fetchPhotos.propTypes = {
  query: PropTypes.string.isRequired,
  numberOfPage: PropTypes.number.isRequired,
};

export default fetchPhotos;
