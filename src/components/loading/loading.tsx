import { FC } from 'react';
import styles from './loading.module.css';

export const Loading: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['lds-default']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
