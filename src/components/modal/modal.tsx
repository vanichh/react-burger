import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
const Modal: React.FC = ({ children }): JSX.Element => {
    return (
        <div>
            <div className='ml-10 mr-10'>
                <h2 className='text text_type_main-medium'>
                    Детали Ингридиента
                </h2>
                <CloseIcon type='primary' />
            </div>
            {children}
        </div>
    );
};

export default Modal;
