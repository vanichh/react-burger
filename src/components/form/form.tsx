import { FC, FormEvent } from 'react';
import styles from './form.module.css';

interface IForm {
  children: React.ReactNode;
  onSubmit?: (e: FormEvent) => void;
  className?: string;
}

export const Form: FC<IForm> = ({ children, onSubmit, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={className || styles.aligin_center_form}
    >
      {children}
    </form>
  );
};
