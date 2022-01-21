import { FC } from 'react';
import styles from './wrapper.module.css';

interface IWrapper {
  children: React.ReactNode;
}

export const Wrapper: FC<IWrapper> = ({ children }) => {
  return <div className={`${styles.aligin_wrapper} mt-30`}>{children}</div>;
};
