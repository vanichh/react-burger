/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { Wrapper } from 'components/wrapper';
import { useSelector, useDispatch } from 'services/types';
import { startWSOrdersAll } from 'services/actions';
import { OrdeInfo } from 'components/order-info';

export const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const { isLoding } = useSelector((store) => store.igridients);
  const { socket, ordersList } = useSelector((store) => store.wsOrders);

  useEffect(() => {
    if (isLoding) {
      dispatch(startWSOrdersAll());
    }
    return () => {
      if (socket) {
        socket.close(1000, 'работа закончена');
      }
    };
  }, [isLoding]);

  if (ordersList.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <OrdeInfo />
    </Wrapper>
  );
};
