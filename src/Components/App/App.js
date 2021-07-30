import React, { Component } from "react";
import fetchPhotos from "../FetchPhotos";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import LoaderContainer from "../Loader";
import Modal from "../Modal";
import { Container } from "./App.styles";

class App extends Component {
  state = {
    query: "",
    photos: [],
    page: 1,
    isLoader: false,
    modalWindow: false,
    largeUrl: "",
    alt: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const firstPage = 1;
      this.setState({ isLoader: true, page: 1 });
      fetchPhotos(this.state.query, firstPage).then((response) => {
        this.setState({ photos: response.hits, isLoader: false });
      });
    }
  }

  getQuery = (value) => {
    this.setState({ query: value });
  };

  addPhotosOnButtonClick = () => {
    let nextPage = this.state.page + 1;
    this.setState({ page: nextPage, isLoader: true });
    fetchPhotos(this.state.query, nextPage)
      .then((response) => {
        this.setState({
          photos: [...this.state.photos, ...response.hits],
          isLoader: false,
        });
      })
      .finally(() => {
        this.scrollToTop();
      });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  openModal = (e) => {
    const elementId = +e.target.dataset.id;
    const modalImg = this.state.photos.filter((photo) => {
      return photo.id === elementId;
    });
    modalImg?.forEach((elem) => {
      this.setState({ largeUrl: elem.largeImageURL, alt: elem.tags });
    });
    this.setState({ modalWindow: true });
  };

  toggleModal = () => {
    this.setState(({ modalWindow }) => ({ modalWindow: !modalWindow }));
  };

  render() {
    const { photos, isLoader, modalWindow, largeUrl, alt } = this.state;
    return (
      <Container>
        <Searchbar change={this.getQuery} />
        <ImageGallery photos={photos} click={this.openModal} />
        {isLoader && <LoaderContainer />}
        {photos.length > 0 && <Button click={this.addPhotosOnButtonClick} />}
        {modalWindow && (
          <Modal largeImg={largeUrl} alt={alt} closeModal={this.toggleModal} />
        )}
      </Container>
    );
  }
}

export default App;
