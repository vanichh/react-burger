import { IngredientDetails } from 'components/ingredient-details';
import { OrdeInfo } from 'components/modals/order-info';
import { Modal } from 'components/modal';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'services/types';

export const ModalIngredients: FC = () => {
  const history = useHistory();

  const closeModalWindows = () => history.goBack();

  return (
    <Modal title='Детали ингредиента' closeModalWindows={closeModalWindows}>
      <IngredientDetails />
    </Modal>
  );
};

export const ModalOrder: FC = () => {
  const history = useHistory();

  const closeModalWindows = () => history.goBack();

  const { ordersList } = useSelector((store) => store.wsOrders);


  if (ordersList.length === 0) {
    return null;
  }

  return (
    <Modal closeModalWindows={closeModalWindows}>
      <OrdeInfo />
    </Modal>
  );
};






