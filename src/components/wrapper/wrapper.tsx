import { FC } from 'react';
import styles from './wrapper.module.css';

interface IWrapper {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper: FC<IWrapper> = ({ children, className }) => {
  return (
    <div className={`${styles.aligin_wrapper} mt-30 ${className || ''}`}>
      {children}
    </div>
  );
};
