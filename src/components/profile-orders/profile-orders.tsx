/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useSelector } from 'services/types';
import styles from './profile-orders.module.css';
import { OrderList } from 'components/order-list';
import { useDispatch } from 'react-redux';
import { startWSOrdersUser } from 'services/actions';

export const ProfileOrders: FC = () => {
  console.log(1)
  const dispatch = useDispatch();
  const { isLoding } = useSelector((store) => store.igridients);
  const { socket } = useSelector((store) => store.wsOrders);

  useEffect(() => {
    if (isLoding) {
      dispatch(startWSOrdersUser());
    }
    return () => {
      if (socket) {
        socket.close(1000, 'работа закончена');
      }
    };
  }, [isLoding]);

  if (!isLoding) {
    return null;
  }
  return <OrderList />;
};
