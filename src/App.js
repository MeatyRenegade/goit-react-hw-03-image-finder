import { Component } from 'react';
import axios from 'axios';

import Searchbar from './components/Searchbar/';
import ImageGallery from './components/ImageGallery/';
import Container from './components/Container/';
import Modal from './components/Modal/';
import Button from './components/Button/';
import Loader from './components/Loader';
// import fetchPictures from './services/picturesApi';
// import { scrollToBottom } from "./utils/utils";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21331461-15f5bdfd142a82f8595dd354e';
const PROPS = '&image_type=photo&orientation=horizontal&per_page=12';

class App extends Component {
  state = {
    pictures: [],
    searchQuery: '',
    page: 1,
    showModal: false,
    isLoading: false,
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.handlePictureSearch();
    }
  }

  onSubmit = data => {
    this.setState({ searchQuery: data });
  };

  handlePictureSearch = data => {
    // const { searchQuery } = this.state;

    // const urlBase = {
    //   query: searchQuery,
    //   page: page,
    // };

    this.setState({ isLoading: true });

    // fetchPictures(urlBase)
    //   .then((res) => {
    //     this.setState((prev) => ({
    //       pictures: [...prev.pictures, ...res],
    //       page: prev.page + 1,
    //     }));
    //   })
    //   .catch((error) => this.setState({ error }))
    //   .finally(() => this.setState({ isLoading: false }));
    axios
      .get(`${BASE_URL}/?key=${API_KEY}&q=${data}${PROPS}`)
      .then(response => this.setState({ pictures: response.data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  ToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, showModal, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />

        {pictures.length > 0 ? (
          <>
            <ImageGallery pictures={pictures} onClick={this.ToggleModal} />
            <Button />
          </>
        ) : null}

        {showModal && (
          <Modal onClose={this.ToggleModal}>
            <img
              src={`https://pixabay.com/get/gf3b5a7d06b75b7bac6a6845e1ca88c7fd53efeec8ccce7b522c40250be854ed6fc3743de7ad85fa657dcb6df9d1b9ce90da6fc7a694f64dc0e1ce3033c5412b2_1280.jpg`}
              alt=""
            />
          </Modal>
        )}

        {isLoading && <Loader />}
      </Container>
    );
  }
}

export default App;
