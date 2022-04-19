import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useSelector, useDispatch } from 'services/types';
import { getNumberOrder } from 'services/actions/constructor';
import styles from './burger-constructor.module.css';
import { useHistory } from 'react-router-dom';

export const PaymentConstructor: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth } = useSelector((store) => store.user);

  const { bunConstructor, ingridientsConstructor, orderSum } = useSelector(
    (store) => store.burgerConstructor
  );

  const isThereIngridients =
    !bunConstructor || !ingridientsConstructor.length ? null : true;

  const handlerOreder = () => {
    if (!isAuth) {
      return history.replace({ pathname: '/login' });
    }
    dispatch(getNumberOrder());
  };

  return (
    <div className={`${styles.constructor__buy} mt-10 mb-10 mr-6`}>
      <div className={`${styles.constructor__wrapper} mr-10`}>
        <p className='text text_type_digits-medium mr-2'>{orderSum}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button
        onClick={isThereIngridients && handlerOreder}
        type='primary'
        size='large'
      >
        Оформить заказ
      </Button>
    </div>
  );
};
