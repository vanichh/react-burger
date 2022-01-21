/* eslint-disable react-hooks/exhaustive-deps */
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
const modalElement = document.getElementById('modal-root') as HTMLElement;

interface PropsModal {
  children: React.ReactNode;
  title?: string;
  closeModalWindows: (arg0?: any) => void;
}

export const Modal = (props: PropsModal): JSX.Element => {
  const { children, title, closeModalWindows } = props;

  const closeWindowsToPress = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      closeModalWindows();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeWindowsToPress);
    return () => window.removeEventListener('keydown', closeWindowsToPress);
  }, [closeWindowsToPress]);

  return ReactDOM.createPortal(
    <ModalOverlay closeModalWindows={closeModalWindows}>
      <div className={`${styles.modal} p-10`}>
        <div className={`${styles.wrapper}`}>
          <h2 className={`${styles.modal__title} text text_type_main-large`}>
            {title}
          </h2>
          <div className={styles.modal__close} onClick={closeModalWindows}>
            <CloseIcon type='primary' />
          </div>
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </ModalOverlay>,
    modalElement
  );
};
