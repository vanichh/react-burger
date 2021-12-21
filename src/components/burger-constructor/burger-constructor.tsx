/* eslint-disable react-hooks/exhaustive-deps */
import {
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { RootState } from 'services/reducers';
import { useDispatch, useSelector } from 'react-redux';
import BunBurger from './bun-burger'; // компонент для отображения верхний и нижний булки
import Ingredients from './ingredients-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrop } from 'react-dnd';
import {
    getNumberOrder,
    isModalWindowsOrder,
} from 'services/actions/constructor';
const URL_BOOKING = 'https://norma.nomoreparties.space/api/orders';

const BurgerConstructor: React.FC = () => {
    const [, dropTarget] = useDrop({
        accept: "ingridient",
        drop(i) {
            console.log(i)
        },
    });

    console.log(useSelector((store: RootState) => store));
    const dispatch = useDispatch();

    const { isModalOpen, order } = useSelector(
        (store: RootState) => store.constructor
    );

    const igridientsConstructor = useSelector(
        (store: RootState) => store.igridients.listIgridients
    );
    // подсчитываем по хардкору сумму всех компонентов
    const totalAmount = igridientsConstructor.reduce(
        (sum: any, current: any) => sum + current.price,
        0
    );

    // Модалка дял оформления заказа
    const ModalWindow: React.FC = () => {
        return (
            <Modal isModalWindows={isModalWindowsOrder}>
                <OrderDetails order={order} />
            </Modal>
        );
    };

    return (
        <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
            <BunBurger ingredientsBun={igridientsConstructor[0]} type='top' />
                <div ref={dropTarget} className={styles.wrapper}>
                    {/* {Используем slice чтоб убрать булки} */}
                    {igridientsConstructor.slice(2).map((ingredients: any) => (
                        <Ingredients
                            key={ingredients._id}
                            ingredients={ingredients}
                        />
                    ))}
                </div>
            <BunBurger
                ingredientsBun={igridientsConstructor[0]}
                type='bottom'
            />
            <div className={`${styles.constructor__buy} mt-10 mb-10`}>
                <div className={`${styles.constructor__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>
                        {totalAmount}
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
