import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { RootState } from 'services/reducers';
import { useDispatch, useSelector } from 'react-redux';
import BunBurger from './bun-burger'; // компонент для отображения верхний и нижний булки
import Ingredients from './ingredients-constructor';
import { useDrop } from 'react-dnd';
import {
    countOrderSum,
    isModalWindowsOrder,
} from 'services/actions/constructor';
import Payment from './payment-constructor';

const BurgerConstructor: React.FC = () => {
    const dispatch = useDispatch();
    const [, dropTarget] = useDrop({
        accept: 'ingridient',
        drop(item) {
            console.log(item);
            dispatch(countOrderSum('plus', item));
        },
    });

    const { isModalOpen, order, ingridientsConstructor, bunConstConstructor } =
        useSelector((store: RootState) => store.burgerConstructor);

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
            <BunBurger ingredientsBun={bunConstConstructor} type='top' />
            <div ref={dropTarget} className={styles.wrapper}>
                {ingridientsConstructor
                    .map((ingredients: any, i: number) => (
                        <Ingredients
                            key={ingredients._id + i}
                            ingredients={ingredients}
                        />
                    ))}
            </div>
            <BunBurger ingredientsBun={bunConstConstructor} type='bottom' />
            <Payment />
            {isModalOpen && <ModalWindow />}
        </section>
    );
};

export default BurgerConstructor;
