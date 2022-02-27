import { FC, ReactNode } from 'react';
import styles from './wrapper.module.css';

interface IWrapper {
  children: ReactNode;
  className?: string;
  style?: { [key: string]: string | number };
}

export const Wrapper: FC<IWrapper> = ({ children, className, style }) => {
  return (
    <div
      style={style ? { ...style } : null}
      className={`${styles.aligin_wrapper} mt-30 ${className || ''}`}
    >
      {children}
    </div>
  );
};
