import { useSelector } from 'services/types';
import { OrderItem } from './order-item';
import styles from './order-list.module.css';

export const OrderList = () => {
  const { ordersList } = useSelector(store => store.wsOrders);
  
  return (
    <section className={`${styles.list} pr-2`}>
      {ordersList.map(item => (
        <OrderItem {...item} key={item._id} id={item._id} />
      ))}
    </section>
  );
};
