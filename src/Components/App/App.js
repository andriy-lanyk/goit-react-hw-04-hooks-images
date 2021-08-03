import React, { useState, useEffect } from "react";
import fetchPhotos from "../FetchPhotos";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import LoaderContainer from "../Loader";
import Modal from "../Modal";
import { Container } from "./App.styles";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  const [largeUrl, setLargeUrl] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    if (query === "") return;
    const firstPage = 1;
    setPage(1);
    setIsLoader(true);
    fetchPhotos(query, firstPage).then((response) => {
      setPhotos(response.hits);
      setIsLoader(false);
    });
  }, [query]);

  function getQuery(value) {
    setQuery(value);
  }

  function addPhotosOnButtonClick() {
    let nextPage = page + 1;
    setIsLoader(true);
    setPage(nextPage);
    fetchPhotos(query, nextPage)
      .then((response) => {
        setPhotos((prev) => [...prev, ...response.hits]);
        setIsLoader(false);
      })
      .finally(() => {
        scrollToTop();
      });
  }

  function scrollToTop() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  function openModal(e) {
    const elementId = +e.target.dataset.id;
    const modalImg = photos.filter((photo) => {
      return photo.id === elementId;
    });
    modalImg?.forEach((elem) => {
      setLargeUrl(elem.largeImageURL);
      setAlt(elem.tags);
    });
    setModalWindow(true);
  }

  function toggleModal() {
    setModalWindow(!modalWindow);
  }

  return (
    <Container>
      <Searchbar change={getQuery} />
      <ImageGallery photos={photos} click={openModal} />
      {isLoader && <LoaderContainer />}
      {photos.length > 0 && <Button click={addPhotosOnButtonClick} />}
      {modalWindow && (
        <Modal largeImg={largeUrl} alt={alt} closeModal={toggleModal} />
      )}
    </Container>
  );
}

export default App;
