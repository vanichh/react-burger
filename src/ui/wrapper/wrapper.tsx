import { FC, ReactNode } from 'react';
import styles from './wrapper.module.css';

interface IWrapper {
  children: ReactNode;
  className?: string;
  style?: Record<string, string | number>;
}

export const Wrapper: FC<IWrapper> = ({ children, className, style }) => {
  return (
    <div
      style={{ ...style } || null}
      className={`${styles.aligin_wrapper} mt-30 ${className || ''}`}
    >
      {children}
    </div>
  );
};
