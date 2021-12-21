/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer, Key } from 'react';
import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { RootState } from 'services/reducers';
import { useDispatch, useSelector } from 'react-redux';
import BunBurger from './bun-burger'; // компонент для отображения верхний и нижний булки
import { getNumberOrder, isModalWindowsOrder } from 'services/actions/ingredients';
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
const BurgerConstructor: React.FC = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(
        (store: RootState) => store.cart.isModalOpenOrder
    );
    const dataIngredients = useSelector(
        (store: RootState) => store.cart.listIgridientsConstructor
    );
    // подсчитываем по хардкору сумму всех компонентов
    const initialCount = dataIngredients.reduce(
        (sum: any, current: any) => sum + current.price,
        0
    );

    // подсчет общей суммы
    const [totalAmount, dispatchTotalAmount] = useReducer(
        reducerSumPrice,
        initialCount,
        initSumPrice
    );

    const numberOred = useSelector((store: RootState) => store.cart.order);

    // Модалка дял оформления заказа
    const ModalWindow: React.FC = () => {
        return (
            <Modal isModalWindows={isModalWindowsOrder}>
                <OrderDetails order={numberOred} />
            </Modal>
        );
    };

    return (
        <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
            <BunBurger ingredientsBun={dataIngredients[0]} type='top' />
            <div className={styles.wrapper}>
                {/* {Используем slice чтоб убрать булки} */}
                {dataIngredients
                    .slice(2)
                    .map(
                        (ingredients: {
                            _id: Key;
                            name: string;
                            price: number;
                            image_mobile: string;
                        }) => (
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
                        )
                    )}
            </div>
            <BunBurger ingredientsBun={dataIngredients[0]} type='bottom' />
            <div className={`${styles.constructor__buy} mt-10 mb-10`}>
                <div className={`${styles.constructor__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>
                        {totalAmount.count}
                    </p>
                    <CurrencyIcon type='primary' />
                </div>
                <Button
                    onClick={() => {
                        dispatch(getNumberOrder(URL_BOOKING));
                    }}
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
