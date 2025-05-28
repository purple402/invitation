import styles from './BaseTitle.module.scss';

const BaseTitle = ({ title }) => {
  return <h2 className={styles.base_title}>{title}</h2>;
};

export default BaseTitle;
