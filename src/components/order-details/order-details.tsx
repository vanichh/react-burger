import icon from '../../images/order-details/done.svg';

const OrderDetails = () => {
    return (
        <>
            <p className="text text_type_digits-large mb-8">034536</p>
            <p className="text text_type_main-medium mb-15">Индикатор заказа</p>
            <img className="mb-15"  src={icon} alt='Готово' />
            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</p>
        </>
    );
};

export default OrderDetails;