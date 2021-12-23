import React from 'react';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INGRIDIENT_MODAL } from '../../services/actions/ingredients';
import { useDrag } from 'react-dnd';
import { RootState } from 'services/reducers';

const CLASSNAMEDIV = `${styles.ingredients__items} mt-6 ml-4 mb-10 mr-4`;

const ElemBurgerIngredients = (props: any): JSX.Element => {
  const dispatch = useDispatch();

  const current = useSelector(
    (store: RootState) =>
      store.burgerConstructor.countIngridientsConstructor[props._id]
  );
  const [{ isDragging }, drag] = useDrag({
    type: props.type !== 'bun' ? 'ingridient' : 'bun',
    item: props,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={CLASSNAMEDIV}
      onClick={() => {
        dispatch({ type: SET_INGRIDIENT_MODAL, item: props });
      }}
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
    </div>
  );
};

export default ElemBurgerIngredients;
