import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INGRIDIENT_MODAL } from '../../services/actions/ingredients';
import { useDrag } from 'react-dnd';
import { RootState } from 'services/store';
import DataProps from 'utils/types';

const CLASSNAMEDIV = `${styles.ingredients__items} mt-6 ml-4 mb-10 mr-4`;

const ElemBurgerIngredients: React.FC<DataProps> = (props) => {
  const dispatch = useDispatch();

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

  const setIngridient = () =>
    dispatch({ type: SET_INGRIDIENT_MODAL, item: props });

  return (
    <div className={CLASSNAMEDIV} onClick={() => setIngridient()}>
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
