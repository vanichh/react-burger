import { Modal } from 'components/modal';
import { OrderDetails } from 'components/order-details';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { isModalWindowsOrder } from 'services/actions';
import { useSelector } from 'services/types';

export const ModalOrderDetails: FC = () => {
  const dispatch = useDispatch();
  const isModalWindows = () => dispatch(isModalWindowsOrder());

  const { order } = useSelector((store) => store.burgerConstructor);

  return (
    <Modal closeModalWindows={isModalWindows}>
      <OrderDetails order={order} />
    </Modal>
  );
};
