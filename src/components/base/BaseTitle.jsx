import { useEffect } from 'react';
import useIntersect from '../../hooks/useIntersect';
import styles from './BaseTitle.module.scss';

const BaseTitle = ({ title }) => {
  const [target, isView] = useIntersect(() => {});

  useEffect(() => {
    console.log(isView);
  }, [isView]);

  return (
    <h2 ref={target} className={`${styles.base_title} ${isView ? styles.active : ''}`}>
      {title}
    </h2>
  );
};

export default BaseTitle;
