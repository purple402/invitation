import closedImage from '@assets/images/after_wedding.jpeg';

import styles from './Thanks.module.scss';

const Thanks = () => {
  return (
    <div className={styles.thanks_container}>
      <div className={styles.thanks_title}>
        <h4>축하해 주셔서 감사합니다!</h4>
        <h4>
          행복하게 잘 살겠습니다<span>❤️</span>
        </h4>
      </div>

      <div className={styles.thanks_image}>
        <img src={closedImage} alt="closed" />
      </div>

      <div className={styles.thanks_title}>
        <h4>이성연, 이기쁨</h4>
      </div>
    </div>
  );
};

export default Thanks;
