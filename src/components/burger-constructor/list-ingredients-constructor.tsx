import styles from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeStateElem,
  UPDATE_BUN_CONSTRUCTOR,
} from 'services/actions/constructor';
import Ingredient from './ingredient-constructor';
import { RootState } from 'services/reducers';

export const ListIngridientBurger = () => {
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingridient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      if (item.type !== 'bun') {
        const newItem = { ...item };
        newItem.idList = Math.random();
        dispatch(changeStateElem('add', newItem));
      } else {
        dispatch({ type: UPDATE_BUN_CONSTRUCTOR, item: item });
      }
    },
  });

  const ingridients = useSelector(
    (store: RootState) => store.burgerConstructor.ingridientsConstructor
  );

  // дефолтное состояние без ингридиентов
  const DefaultIngridient = () => {
    return (
      <p
        className={`${styles.constructor__text_default} text text_type_main-default`}>
        Перенесите сюда нужные ингридиенты из левого меню
      </p>
    );
  };

  return (
    <div
      ref={dropTarget}
      className={`${styles.wrapper} ${isHover ? styles.hover_dnd : ''}`}>
      {!ingridients.length ? (
        <DefaultIngridient />
      ) : (
        ingridients.map((ingredient: any, i: number) => (
          <Ingredient
            key={ingredient._id + i}
            index={i}
            ingredient={ingredient}
          />
        ))
      )}
    </div>
  );
};

export default ListIngridientBurger;
