import { FC, ReactNode } from 'react';
import styles from './wrapper.module.css';

interface IWrapper {
  children: ReactNode;
  className?: string;
}

export const Wrapper: FC<IWrapper> = ({ children, className }) => {
  return (
    <div className={`${styles.aligin_wrapper} mt-30 ${className || ''}`}>
      {children}
    </div>
  );
};
