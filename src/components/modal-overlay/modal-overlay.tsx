import styles from './modal-overlay.module.css';
import { SyntheticEvent } from 'react';

interface PropsModalOverlay {
    children: React.ReactNode;
    IsOpen: (arg0: boolean) => void;
}

const ModalOverlay = ({ children, IsOpen }: PropsModalOverlay): JSX.Element => {
    const closeWindows = ({ currentTarget, target }: SyntheticEvent) => {
        if (currentTarget === target) {
            IsOpen(false);
        }
    };
    return (
        <div onClick={closeWindows} className={styles.modal}>
            {children}
        </div>
    );
};

export default ModalOverlay;
