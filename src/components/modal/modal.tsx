/* eslint-disable react-hooks/exhaustive-deps */
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalElement = document.getElementById('modal-root') as HTMLElement;

interface PropsModal {
    children: React.ReactNode;
    IsOpen: (arg0: boolean) => void;
    title?: 'yes' | 'no';
}

const Modal = ({
    children,
    IsOpen,
    title = 'yes',
}: PropsModal): JSX.Element => {
    const closeWindowsToPress = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
            IsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', closeWindowsToPress);
        return () => window.removeEventListener('keydown', closeWindowsToPress);
    }, [closeWindowsToPress]);

    return ReactDOM.createPortal(
        <ModalOverlay IsOpen={IsOpen}>
            <div className={`${styles.modal} p-10`}>
                <div className={`${styles.wrapper}`}>
                    <h2
                        className={`${styles.modal__title} text text_type_main-large`}
                    >
                        {title === 'yes' && 'Детали Ингридиента'}
                    </h2>
                    <div
                        className={styles.modal__close}
                        onClick={() => IsOpen(false)}
                    >
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
