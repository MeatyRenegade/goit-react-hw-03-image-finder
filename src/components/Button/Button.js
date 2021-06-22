import { Component } from "react";

import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div className={styles.Button__container}>
        <button type="submit" className={styles.Button}>
          Load More
        </button>
      </div>
    );
  }
}

export default Button;
