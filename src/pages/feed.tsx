/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'services/types';
import { IOrders } from 'utils/types';
import { closeWSOrders, startWSOrders } from 'services/actions';
import { OrderItemList } from 'components/order-item-list';
import { InfoAllOrders } from 'components/info-all-orders';
import styles from './page.module.css';

export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const { isLoding } = useSelector((store) => store.igridients);
  const { ordersList } = useSelector((store) => store.wsOrders);
  useEffect(() => {
    if (isLoding) {
      dispatch(startWSOrders());
    }
  }, [isLoding]);

  console.log(ordersList);

  return (
    <>
      <main className={styles.container}>
        <section>
          <h2 className='text text_type_main-large mt-10 mb-5'>
            Лента заказов
          </h2>
          <div>
            {ordersList.map((item) => (
              <OrderItemList {...item} key={item._id} />
            ))}
          </div>
        </section>
        <InfoAllOrders />
      </main>
    </>
  );
};
