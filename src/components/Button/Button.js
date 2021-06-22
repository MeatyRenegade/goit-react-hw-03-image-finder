import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button type="submit" className={styles.Button}>
        Load More
      </button>
    );
  }
}

export default Button;
