import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

const Modal = ({ children, IsOpen, title = 'yes' }: any): JSX.Element => {
    return (
        <div className={`${styles.modal} p-10`}>
            <div className={`${styles.wrapper}`}>
                <h2
                    className={`${styles.modal__title} text text_type_main-medium`}
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
    );
};

export default Modal;
