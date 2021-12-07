import styles from './modal-overlay.module.css';
import ReactDOM from 'react-dom';

const ModalOverlay = ({ children, IsOpen }: any) => {
    const modalElement = document.getElementById('modal-root') as HTMLElement;

    return ReactDOM.createPortal(
        <div onClick={() => IsOpen(false)} className={styles.modal}>
            {children}
        </div>,
        modalElement
    );
};

export default ModalOverlay;
