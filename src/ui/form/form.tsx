import { FC, FormEvent } from 'react';
import styles from './form.module.css';

interface IForm {
  children: React.ReactNode;
  onSubmit?: (e: FormEvent) => void;
  className?: string;
  style?: Record<string, string | number>;
}

export const Form: FC<IForm> = ({ children, onSubmit, className, style }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit || handleSubmit}
      className={className || styles.aligin_center_form}
      style={style}
    >
      {children}
    </form>
  );
};
