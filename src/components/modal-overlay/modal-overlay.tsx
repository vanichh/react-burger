import styles from './modal-overlay.module.css';
import { FC, ReactNode, SyntheticEvent } from 'react';
interface PropsModalOverlay {
  children: ReactNode;
  closeModalWindows?: (args?: false) => void;
}

const ModalOverlay: FC<PropsModalOverlay> = (props) => {
  
  const { children, closeModalWindows } = props;

  const handleCloseWindows = ({ currentTarget, target }: SyntheticEvent) => {
    if (currentTarget === target) {
      closeModalWindows();
    }
  };

  return (
    <div onClick={handleCloseWindows} className={styles.modal}>
      {children}
    </div>
  );
};

export default ModalOverlay;
