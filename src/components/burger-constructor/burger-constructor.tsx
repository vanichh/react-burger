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

const BurgerConstructor = ({
    dataIngredients,
}: {
    dataIngredients: Array<DataProps>;
}): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ModalWindow = (): JSX.Element => {
        return (
            <Modal title='no' setIsModalOpen={setIsModalOpen}>
                <OrderDetails />
            </Modal>
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
                    price={dataIngredients[0].price}
                    text={`${dataIngredients[0].name}(верх)`}
                    thumbnail={dataIngredients[0].image_mobile}
                    isLocked={true}
                />
            </div>
            <div className={styles.wrapper}>
                {dataIngredients.slice(1, -1).map((item) => (
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
                    price={dataIngredients[dataIngredients.length - 1].price}
                    text={`${
                        dataIngredients[dataIngredients.length - 1].name
                    }(низ)`}
                    thumbnail={
                        dataIngredients[dataIngredients.length - 1].image_mobile
                    }
                    isLocked={true}
                />
            </div>
            <div className={`${styles.constructor__buy} mt-10`}>
                <div className={`${styles.constructor__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>640</p>
                    <CurrencyIcon type='primary' />
                </div>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type='primary'
                    size='large'
                >
                    Оформить заказ
                </Button>
            </div>
            {isModalOpen && <ModalWindow />}
        </section>
    );
};

export default BurgerConstructor;
