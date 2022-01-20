/* eslint-disable react-hooks/exhaustive-deps */
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { RootState } from 'services/store';
import DataProps from 'utils/types';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
const CLASSNAMEDIV = `${styles.ingredients__items} mt-6 ml-4 mb-10 mr-4`;

const ElemBurgerIngredients: React.FC<DataProps> = (props) => {
  let location = useLocation();
  const { _id } = props;
  // счетчик количества добавленного ингридиента
  const current = useSelector(
    (store: RootState) =>
      store.burgerConstructor.countIngridientsConstructor[props._id]
  );

  const [, drag] = useDrag({
    type: 'ingridient',
    item: props,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  return useMemo(
    () => (
      <Link
        to={{
          pathname: `/ingredients/${_id}`,
          state: { background: location },
        }}
        className={CLASSNAMEDIV}
      >
        {current ? <Counter count={current} size='default' /> : null}
        <img
          ref={drag}
          className={`${styles.ingredients__icon} ml-4 mr-4`}
          src={props.image}
          alt={props.name}
        />
        <div className={`${styles.ingredients__wrapper} mt-4 mb-4`}>
          <p className='text text_type_main-medium mr-2'>{props.price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p className='text text_type_main-default'>{props.name}</p>
      </Link>
    ),
    [current]
  );
};

export default ElemBurgerIngredients;



