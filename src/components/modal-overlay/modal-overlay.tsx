import styles from './modal-overlay.module.css';
import { SyntheticEvent } from 'react';
interface PropsModalOverlay {
  children: React.ReactNode;
  closeModalWindows?: (args?: false) => void;
}

const ModalOverlay: React.FC<PropsModalOverlay> = (props) => {
  
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
