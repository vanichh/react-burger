import {
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getNumberOrder } from 'services/actions/constructor';
import { RootState } from 'services/reducers';
import styles from './burger-constructor.module.css';

const URL_BOOKING = 'https://norma.nomoreparties.space/api/orders';

export const PaymentConstructor: React.FC = () => {
    const dispatch = useDispatch();

    const orderSum = useSelector(
        (store: RootState) => store.burgerConstructor.orderSum
    );

    return (
        <div className={`${styles.constructor__buy} mt-10 mb-10 mr-6`}>
            <div className={`${styles.constructor__wrapper} mr-10`}>
                <p className='text text_type_digits-medium mr-2'>{orderSum}</p>
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
    );
};

export default PaymentConstructor;
