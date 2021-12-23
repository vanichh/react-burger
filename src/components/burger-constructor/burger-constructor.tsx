import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { RootState } from 'services/reducers';
import { useSelector } from 'react-redux';
import BunBurger from './bun-ingredient-constructor'; // компонент для отображения верхний и нижний булки
import ListIngridientBurger from './list-ingredients-constructor';
import { isModalWindowsOrder } from 'services/actions/constructor';
import Payment from './payment-constructor';

const BurgerConstructor: React.FC = () => {
  const { isModalOpen, order, bunConstructor } = useSelector(
    (store: RootState) => store.burgerConstructor
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
      <BunBurger ingredientsBun={bunConstructor} type='top' />
      <ListIngridientBurger />
      <BunBurger ingredientsBun={bunConstructor} type='bottom' />
      <Payment />
      {isModalOpen && <ModalWindow />}
    </section>
  );
};

export default BurgerConstructor;
