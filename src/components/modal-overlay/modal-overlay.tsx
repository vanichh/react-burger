import styles from './modal-overlay.module.css';
import { SyntheticEvent } from 'react';

interface PropsModalOverlay {
    children: React.ReactNode;
    setIsModalOpen: (arg0: boolean) => void;
}

const ModalOverlay = ({ children, setIsModalOpen }: PropsModalOverlay): JSX.Element => {
    const handleCloseWindows = ({ currentTarget, target }: SyntheticEvent) => {
        if (currentTarget === target) {
            setIsModalOpen(false);
        }
    };
    return (
        <div onClick={handleCloseWindows} className={styles.modal}>
            {children}
        </div>
    );
};

export default ModalOverlay;
