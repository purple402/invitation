import styles from './BaseContainer.module.scss';

const BaseContainer = ({ children, background = 'main', style = {} }) => {
  return (
    <div className={`${styles.base_container} ${styles[background]}`} style={style}>
      {children}
    </div>
  );
};

export default BaseContainer;
