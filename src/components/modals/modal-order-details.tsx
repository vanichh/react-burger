import { Modal } from 'components/modal';
import { OrderDetails } from 'components/order-details';
import { FC } from 'react';
import { isModalWindowsOrder } from 'services/actions';
import { useSelector, useDispatch } from 'services/types';
import { Loading } from 'components/loading';

export const ModalOrderDetails: FC = () => {
  const dispatch = useDispatch();
  const isModalWindows = () => dispatch(isModalWindowsOrder());

  const { order } = useSelector((store) => store.burgerConstructor);

  return (
    <Modal closeModalWindows={isModalWindows}>
      {!order ? <Loading /> : <OrderDetails order={order} />}
    </Modal>
  );
};
