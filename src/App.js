import { Component } from "react";

import Searchbar from "./components/Searchbar/";
import ImageGallery from "./components/ImageGallery/";
import Container from "./components/Container/";
import Modal from "./components/Modal/";
import Button from "./components/Button/";
import Loader from "./components/Loader";
import axios from "axios";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  state = {
    pictures: [],
    showModal: false,
    isLoading: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?key=21331461-15f5bdfd142a82f8595dd354e&q=cats&image_type=photo&per_page=12&page=1`
      )
      .then((res) =>
        this.setState({
          pictures: res.data.hits,
          isLoading: false,
        })
      );
  }

  render() {
    const { pictures, showModal, isLoading } = this.state;

    return (
      <Container>
        <Searchbar />

        {pictures.length > 0 ? (
          <>
            <ImageGallery pictures={pictures} />
            <Button />
          </>
        ) : null}

        {showModal && <Modal />}

        {isLoading && <Loader />}
      </Container>
    );
  }
}

export default App;
