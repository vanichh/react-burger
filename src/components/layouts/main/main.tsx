import { FC } from 'react';
import styles from './main.module.css';

export const Main: FC = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
