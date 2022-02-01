/* eslint-disable react-hooks/exhaustive-deps */
import styles from './burger-constructor.module.css';
import { FC, useMemo } from 'react';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { RootState } from 'services/store';
import { useDispatch, useSelector } from 'react-redux';
import { ListIngridientBurger } from './list-ingredients-constructor';
import { isModalWindowsOrder } from 'services/actions/constructor';
import { PaymentConstructor } from './payment-constructor';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const { isModalOpen, order } = useSelector(
    (store: RootState) => store.burgerConstructor
  );

  const isModalWindows = () => dispatch(isModalWindowsOrder());

  // Модалка дял оформления заказа
  const ModalWindow = useMemo(
    () => (
      <Modal closeModalWindows={isModalWindows}>
        <OrderDetails order={order} />
      </Modal>
    ),

    [isModalWindows]
  );

  return (
    <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
      <ListIngridientBurger />
      <PaymentConstructor />
      {isModalOpen && ModalWindow}
    </section>
  );
};
