/* eslint-disable react-hooks/exhaustive-deps */
import styles from './burger-constructor.module.css';
import { FC } from 'react';
import { useSelector } from 'services/types';
import { ListIngridientBurger } from './list-ingredients-constructor';
import { PaymentConstructor } from './payment-constructor';
import { ModalOrderDetails } from 'components/modals';

export const BurgerConstructor: FC = () => {
  
  const { isModalOpen } = useSelector((store) => store.burgerConstructor);

  return (
    <section className={`${styles.constructor} pt-25 ml-4 mr-4`}>
      <ListIngridientBurger />
      <PaymentConstructor />
      {isModalOpen && <ModalOrderDetails />}
    </section>
  );
};
