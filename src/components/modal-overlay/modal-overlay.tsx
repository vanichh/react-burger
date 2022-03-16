import styles from './modal-overlay.module.css';
import { FC, ReactNode, SyntheticEvent } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      onClick={handleCloseWindows}
      className={styles.modal}
      variants={{ 
        mount: { opacity: 0.2 },
        rest: { opacity: 1 }
      }}
      initial='mount'
      animate='rest'
    >
      {children}
    </motion.div>
  );
};

export default ModalOverlay;
