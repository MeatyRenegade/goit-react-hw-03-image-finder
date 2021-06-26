import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children }) => {
  return <div className={styles.App}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
