import { Component } from "react";
import Searchbar from "./components/Searchbar/";
import ImageGallery from "./components/ImageGallery/";
// import Modal from "./components/Modal/";
import Button from "./components/Button/";
import Loader from "react-loader-spinner";

import styles from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Searchbar />
        <ImageGallery />

        {/* <Modal /> */}
        <Button />
        <Loader type="ThreeDots" color="#5d49e3" height={80} width={80} />
      </div>
    );
  }
}

export default App;
