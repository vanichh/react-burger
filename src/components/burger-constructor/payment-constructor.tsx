import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNumberOrder } from 'services/actions/constructor';
import { RootState } from 'services/store';
import styles from './burger-constructor.module.css';
import { URL_API } from 'utils/url-api';
import { useHistory } from 'react-router-dom';

const URL_REQUEST_ORDER = URL_API + 'orders';

export const PaymentConstructor: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const orderSum = useSelector(
    (store: RootState) => store.burgerConstructor.orderSum
  );

  const { isAuth } = useSelector((store: RootState) => store.user);

  const { bunConstructor, ingridientsConstructor } = useSelector(
    (store: RootState) => store.burgerConstructor
  );

  const isThereIngridients =
    bunConstructor.length === 0 && ingridientsConstructor.length === 0
      ? false
      : true;

  const handleOreder = () => {
    if (isThereIngridients) {
      if (!isAuth) {
        return history.replace({ pathname: '/login' });
      }
      dispatch(getNumberOrder(URL_REQUEST_ORDER));
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

