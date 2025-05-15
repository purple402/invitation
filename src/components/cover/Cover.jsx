import styles from './Cover.module.scss';

import coverImage from '@assets/images/cover.jpg';

const Cover = () => {
  return (
    <div className={styles.cover_container}>
      <div className={styles.cover_image}>
        <img src={coverImage} alt="cover" />
      </div>
      <div className={styles.cover_title}>
        <h1>The Wedding of</h1>
        <h1>Sungyeon & Joy</h1>
      </div>
      <div className={styles.cover_sub_title}>
        <h4>성연&기쁨 결혼식에</h4>
        <h4>초대합니다</h4>
      </div>
    </div>
  );
};

export default Cover;
