import { useState, useContext } from 'react';
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
import { dataBurgerConstructor } from '../app/app';

const CLASSNAME_TOP_BUN: string = `${styles.constructor__wrapper} ${styles.constructor__wrapper_align} mb-4 ml-4 mr-6`;
const CLASSNAME_BOTTTOM_BUN: string = `${styles.constructor__wrapper} ${styles.constructor__wrapper_align} mt-4 ml-4 mr-6`;

const BurgerConstructor = ({
    dataIngredients,
}: {
    dataIngredients: Array<DataProps>;
}): JSX.Element => {
    const dataIngredients1 = useContext(dataBurgerConstructor);
    console.log(dataIngredients1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ModalWindow = (): JSX.Element => {
        return (
            <Modal title='no' setIsModalOpen={setIsModalOpen}>
                <OrderDetails />
            </Modal>
        );
    };

    const TOP_BUN: any = dataIngredients[0];

    return (
        <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
            <div className={CLASSNAME_TOP_BUN}>
                <ConstructorElement
                    type={'top'}
                    handleClose={() => false}
                    price={TOP_BUN.price}
                    text={`${TOP_BUN.name}(верх)`}
                    thumbnail={TOP_BUN.image_mobile}
                    isLocked={true}
                />
            </div>
            <div className={styles.wrapper}>
                {dataIngredients.slice(2).map((ingredients) => (
                    <div
                        key={ingredients._id}
                        className={`${styles.constructor__wrapper} mb-4 ml-4 mr-4`}
                    >
                        <img
                            src={iconIngreidient}
                            alt={ingredients.name}
                            className={styles.constructor__img}
                        />
                        <ConstructorElement
                            type={undefined}
                            handleClose={() => false}
                            price={ingredients.price}
                            text={ingredients.name}
                            thumbnail={ingredients.image_mobile}
                            isLocked={false}
                        />
                    </div>
                ))}
            </div>
            <div className={CLASSNAME_BOTTTOM_BUN}>
                <ConstructorElement
                    type={'bottom'}
                    handleClose={() => false}
                    price={TOP_BUN.price}
                    text={`${TOP_BUN.name}(низ)`}
                    thumbnail={TOP_BUN.image_mobile}
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
