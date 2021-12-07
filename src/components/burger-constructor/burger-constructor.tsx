import { useState } from 'react';
import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import DataProps from '../../utils/types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import ModalOverlay from '../modal-overlay/modal-overlay';

const BurgerConstructor = ({
    data,
}: {
    data: Array<DataProps>;
}): JSX.Element => {
    const [isModal, setisModal] = useState(false);
    const ModalWindow = () => {
        return (
            <ModalOverlay IsOpen={setisModal}>
                <Modal title='no' IsOpen={setisModal}>
                    <OrderDetails />
                </Modal>
            </ModalOverlay>
        );
    };

    return (
        <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
            <div
                className={`${styles.constructor__wrapper} ${styles.constructor__wrapper_align} mb-4 ml-4 mr-6`}
            >
                <ConstructorElement
                    type={'top'}
                    handleClose={() => false}
                    price={data[0].price}
                    text={`${data[0].name}(верх)`}
                    thumbnail={data[0].image_mobile}
                    isLocked={true}
                />
            </div>
            <div className={styles.wrapper}>
                {data.slice(1, -1).map((item) => (
                    <div
                        key={item._id}
                        className={`${styles.constructor__wrapper} mb-4 ml-4 mr-4`}
                    >
                        <img
                            src={iconIngreidient}
                            alt={item.name}
                            className={styles.constructor__img}
                        />
                        <ConstructorElement
                            type={undefined}
                            handleClose={() => false}
                            price={item.price}
                            text={item.name}
                            thumbnail={item.image_mobile}
                            isLocked={false}
                        />
                    </div>
                ))}
            </div>
            <div
                className={`${styles.constructor__wrapper} ${styles.constructor__wrapper_align} mt-4 ml-4 mr-6`}
            >
                <ConstructorElement
                    type={'bottom'}
                    handleClose={() => false}
                    price={data[data.length - 1].price}
                    text={`${data[data.length - 1].name}(низ)`}
                    thumbnail={data[data.length - 1].image_mobile}
                    isLocked={true}
                />
            </div>
            <div className={`${styles.constructor__buy} mt-10`}>
                <div className={`${styles.constructor__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>640</p>
                    <CurrencyIcon type='primary' />
                </div>
                <Button
                    onClick={() => setisModal(true)}
                    type='primary'
                    size='large'
                >
                    Оформить заказ
                </Button>
            </div>
            {isModal && <ModalWindow />}
        </section>
    );
};

export default BurgerConstructor;
