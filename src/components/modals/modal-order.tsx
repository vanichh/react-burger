import { Modal } from "components/modal";
import { OrdeInfo } from "components/order-info";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "services/types";

export const ModalOrder: FC = () => {
  const history = useHistory();

  const closeModalWindows = () => history.goBack();

  const { ordersList } = useSelector((store) => store.wsOrders);


  if (!ordersList.length) {
    return null;
  }

  return (
    <Modal closeModalWindows={closeModalWindows}>
      <OrdeInfo />
    </Modal>
  );
};