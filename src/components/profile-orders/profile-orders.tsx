/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useSelector } from 'services/types';
import { OrderList } from 'components/order-list';
import { useDispatch } from 'services/types';
import { startWSOrdersUser } from 'services/actions';
import { closeWS } from 'services/actions';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const { isLoding } = useSelector(store => store.igridients);

  useEffect(() => {
    if (isLoding) {
      dispatch(startWSOrdersUser());
    }
    return () => {
      dispatch(closeWS());
    };
  }, [isLoding]);

  if (!isLoding) {
    return null;
  }
  return <OrderList />;
};
