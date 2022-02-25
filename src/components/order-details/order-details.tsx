import icon from 'images/order-details/done.svg';
import { FC } from 'React';
interface IPropsOrderDetails {
  order: {
    number: number;
  };
}

export const OrderDetails: FC<IPropsOrderDetails> = ({ order }) => {
  return (
    <>
      <p className='text text_type_digits-large mb-8'>{order.number}</p>
      <p className='text text_type_main-medium mb-15'>Индикатор заказа</p>
      <img className='mb-15' src={icon} alt='Готово' />
      <p className='text text_type_main-default mb-2'>
        Ваш заказ начали готовить
      </p>
      <p className='text text_type_main-default text_color_inactive mb-15'>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};
