import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { RootState } from 'services/store';
import { useSelector } from 'react-redux';
import ListIngridientBurger from './list-ingredients-constructor';
import { isModalWindowsOrder } from 'services/actions/constructor';
import Payment from './payment-constructor';

const BurgerConstructor: React.FC = () => {
  const { isModalOpen, order } = useSelector(
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
      <ListIngridientBurger />
      <Payment />
      {isModalOpen && <ModalWindow />}
    </section>
  );
};

export default BurgerConstructor;
