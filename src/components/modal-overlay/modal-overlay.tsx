import styles from './modal-overlay.module.css';
import Modal from '../modal/modal';
import ReactDOM from 'react-dom';
import React from 'react';

const ModalOverlay = ({ children }: any) => {
    const modalElement = document.getElementById('modal-root') as HTMLElement;

    return ReactDOM.createPortal(
        <div className={styles.modal}>{children}</div>,
        modalElement
    );
};

export default ModalOverlay;
