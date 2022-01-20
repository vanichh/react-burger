import styles from './modal-overlay.module.css';
import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
interface PropsModalOverlay {
  children: React.ReactNode;
  isModalWindows?: (args?: false) => void;
}

const ModalOverlay: React.FC<PropsModalOverlay> = (props) => {
  
  const { children, isModalWindows } = props;

  const dispetch = useDispatch();

  const handleCloseWindows = ({ currentTarget, target }: SyntheticEvent) => {
    if (currentTarget === target) {
      isModalWindows();
    }
  };

  return (
    <div onClick={handleCloseWindows} className={styles.modal}>
      {children}
    </div>
  );
};

export default ModalOverlay;
