import { Component } from 'react';

import Searchbar from './components/Searchbar/';
import ImageGallery from './components/ImageGallery/';
import Container from './components/Container/';
import Modal from './components/Modal/';
import Button from './components/Button/';
import Loader from './components/Loader';
import { fetchPictures } from './services/picturesApi';
import scrollToBottom from './utils/utils';

class App extends Component {
  state = {
    pictures: [],
    searchQuery: '',
    largeImg: '',
    largeImgAlt: '',
    currentPage: 1,
    showModal: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pictures: [],
      error: null,
    });
  };

  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchPictures(options)
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          currentPage: prevState.currentPage + 1,
        }));
        scrollToBottom();
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImage = e => {
    this.setState({
      largeImg: e.target.dataset.source,
      largeImgAlt: e.target.dataset.alt,
    });

    this.toggleModal();
  };

  render() {
    const { pictures, showModal, isLoading, error, largeImg, largeImgAlt } =
      this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery pictures={pictures} onClick={this.getLargeImage} />

        {pictures.length > 0 && <Button onClick={this.fetchPictures} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImg} alt={largeImgAlt} />
          </Modal>
        )}

        {error && <h1>Whoops, something went wrong: {error.message}</h1>}
        {isLoading && <Loader />}
      </Container>
    );
  }
}

export default App;
