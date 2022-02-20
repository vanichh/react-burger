/* eslint-disable react-hooks/exhaustive-deps */
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useSelector } from 'services/types/';
import { useDrag } from 'react-dnd';
import { IDataProps } from 'utils/types';
import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CLASS_NAME_ITEM = `${styles.ingredients__items} mt-6 ml-4 mb-10 mr-4`;

export const ElemBurgerIngredients: FC<IDataProps> = (props) => {
  const location = useLocation();
  const { _id } = props;
  // счетчик количества добавленного ингридиента
  const current = useSelector(
    (store) => store.burgerConstructor.countIngridientsConstructor[_id]
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
        className={CLASS_NAME_ITEM}
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
        <p className={`text text_type_main-default ${styles.aligin_text}`}>
          {props.name}
        </p>
      </Link>
    ),
    [current]
  );
};
