import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'services/types';
import { getNumberOrder } from 'services/actions/constructor';
import styles from './burger-constructor.module.css';
import { useHistory } from 'react-router-dom';

export const PaymentConstructor: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const orderSum = useSelector((store) => store.burgerConstructor.orderSum);

  const { isAuth } = useSelector((store) => store.user);

  const { bunConstructor, ingridientsConstructor } = useSelector(
    (store) => store.burgerConstructor
  );

  const isThereIngridients =
    bunConstructor.length === 0 || ingridientsConstructor.length === 0
      ? false
      : true;

  const handleOreder = () => {
    if (isThereIngridients) {
      if (!isAuth) {
        return history.replace({ pathname: '/login' });
      }
      dispatch(getNumberOrder());
    }
  };

  return (
    <div className={`${styles.constructor__buy} mt-10 mb-10 mr-6`}>
      <div className={`${styles.constructor__wrapper} mr-10`}>
        <p className='text text_type_digits-medium mr-2'>{orderSum}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button onClick={handleOreder} type='primary' size='large'>
        Оформить заказ
      </Button>
    </div>
  );
};
