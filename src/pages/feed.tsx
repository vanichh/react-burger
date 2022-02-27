/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useDispatch } from 'services/types';
import { useSelector } from 'services/types';
import { startWSOrdersAll } from 'services/actions';
import { OrderList } from 'components/order-list';
import { InfoAllOrders } from 'components/info-all-orders';
import { closeWS } from 'services/actions/';
import { Loading } from 'components/loading';
import styles from './page.module.css';

export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const { isLoding } = useSelector(store => store.igridients);

  useEffect(() => {
    if (isLoding) {
      dispatch(startWSOrdersAll());
    }
    return () => {
      dispatch(closeWS());
    };
  }, [isLoding]);

  if (!isLoding) {
    return <Loading />;
  }
  return (
    <>
      <main className={styles.container}>
        <h2
          className={`text text_type_main-large mt-10 mb-5 ml-7 ${styles.title}`}>
          Лента заказов
        </h2>
        <OrderList />
        <InfoAllOrders />
      </main>
    </>
  );
};
