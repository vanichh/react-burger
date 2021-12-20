import styles from './modal-overlay.module.css';
import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { isModalWindowsIngridient } from 'services/actions/cart';
interface PropsModalOverlay {
    children: React.ReactNode;
}

const ModalOverlay = ({ children }: PropsModalOverlay): JSX.Element => {

    const despetch = useDispatch();
    
    const handleCloseWindows = ({ currentTarget, target }: SyntheticEvent) => {
        if (currentTarget === target) {
            despetch(isModalWindowsIngridient(false));
        }
    };

    return (
        <div onClick={handleCloseWindows} className={styles.modal}>
            {children}
        </div>
    );
};

export default ModalOverlay;
