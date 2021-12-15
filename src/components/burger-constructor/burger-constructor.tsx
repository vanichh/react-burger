/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useReducer, useEffect } from 'react';
import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { dataBurgerConstructor } from '../app/app';
import bunBurger from './bun-burger'; // компонент для отображения верхний и нижний булки

const URL_BOOKING = 'https://norma.nomoreparties.space/api/orders';

const initSumPrice = (initialCount: any) => {
    return { count: initialCount };
};
const reducerSumPrice = (state: any, action: any) => {
    switch (action.type) {
        case 'plus':
            return { count: state.count + action.payload };
        case 'minus':
            return { count: state.count - action.payload };
        case 'reset':
            return initSumPrice(0);
        default:
            return state;
    }
};
const BurgerConstructor = (): JSX.Element => {
    const dataIngredients = useContext(dataBurgerConstructor);
    // подсчитываем по хардкору сумму всех компонентов
    const initialCount = dataIngredients.reduce(
        (sum, current) => sum + current.price,
        0
    );

    // подсчет общей суммы
    const [totalAmount, dispatchTotalAmount] = useReducer(
        reducerSumPrice,
        initialCount,
        initSumPrice
    );

    const [numberOred, setNumberder] = useState<{ number: number }>({
        number: 0,
    });

    // состояние модального окна
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Модалка дял оформления заказа
    const ModalWindow = (): JSX.Element => {
        return (
            <Modal title='no' setIsModalOpen={setIsModalOpen}>
                <OrderDetails order={numberOred} />
            </Modal>
        );
    };

    useEffect(() => {
        if (isModalOpen) {
            fetch(URL_BOOKING, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    ingredients: dataIngredients.map((elem) => elem._id),
                }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.success) {
                        setNumberder(response.order);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setIsModalOpen(false);
                });
        }
    }, [isModalOpen]);

    return (
        <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
            {bunBurger(dataIngredients[0], 'top')}
            <div className={styles.wrapper}>
                {/* {Используем slice чтоб убрать булки} */}
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
                            handleClose={() =>
                                dispatchTotalAmount({
                                    type: 'minus',
                                    payload: ingredients.price,
                                })
                            }
                            price={ingredients.price}
                            text={ingredients.name}
                            thumbnail={ingredients.image_mobile}
                            isLocked={false}
                        />
                    </div>
                ))}
            </div>
            {bunBurger(dataIngredients[0], 'bottom')}
            <div className={`${styles.constructor__buy} mt-10`}>
                <div className={`${styles.constructor__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>
                        {totalAmount.count}
                    </p>
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
            {isModalOpen && numberOred.number && <ModalWindow />}
        </section>
    );
};

export default BurgerConstructor;
