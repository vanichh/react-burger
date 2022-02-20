import { IngredientDetails } from 'components/ingredient-details';
import { OrdeInfo } from 'components/modals/order-info';
import { Modal } from 'components/modal';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

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

  return (
    <Modal closeModalWindows={closeModalWindows}>
      <OrdeInfo />
    </Modal>
  );
};