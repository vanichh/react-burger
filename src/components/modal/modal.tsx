/* eslint-disable react-hooks/exhaustive-deps */
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useParams } from 'react-router-dom';
const modalElement = document.getElementById('modal-root') as HTMLElement;

interface PropsModal {
  children: React.ReactNode;
  title?: string;
  isModalWindows?: (arg0?: any) => void;
}

const Modal = (props: PropsModal): JSX.Element => {
  const { id }: { id: string } = useParams();
  console.log(id);

  const { children, title, isModalWindows } = props;

  const closeWindowsToPress = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      isModalWindows();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeWindowsToPress);
    return () => window.removeEventListener('keydown', closeWindowsToPress);
  }, [closeWindowsToPress]);

  return ReactDOM.createPortal(
    <ModalOverlay isModalWindows={isModalWindows}>
      <div className={`${styles.modal} p-10`}>
        <div className={`${styles.wrapper}`}>
          <h2 className={`${styles.modal__title} text text_type_main-large`}>
            {title}
          </h2>
          <div className={styles.modal__close} onClick={isModalWindows}>
            <CloseIcon type='primary' />
          </div>
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </ModalOverlay>,
    modalElement
  );
};

export default Modal;
