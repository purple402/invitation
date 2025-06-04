import styles from './Cover.module.scss';

import coverImage from '@assets/images/cover.jpg';

const Cover = () => {
  return (
    <div className={styles.cover_container}>
      <div className={styles.cover_image}>
        <img src={coverImage} alt="cover" />
      </div>

      <div className={styles.cover_title}>
        <div>
          <h4>08.02</h4>
        </div>
        <span>❤️</span>
      </div>

      <div className={styles.cover_sub_title}>
        <span className="material-icons">&#xE5E0;</span>
        <h4>이성연 - 이기쁨</h4>
        <h4>결혼합니다</h4>
      </div>
    </div>
  );
};

export default Cover;
