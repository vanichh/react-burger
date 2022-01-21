import { FC, FormEvent } from 'react';
import styles from './form.module.css';

interface IForm {
  children: React.ReactNode;
  onSubmit?: (e: FormEvent) => void;
}

export const Form: FC<IForm> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.aligin_center_form}>
      {children}
    </form>
  );
};



