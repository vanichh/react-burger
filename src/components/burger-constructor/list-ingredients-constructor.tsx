import styles from './burger-constructor.module.css';
import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeStateElem,
  ADD_BUN_CONSTRUCTOR,
} from 'services/actions/constructor';
import { IngredientConstructor } from './ingredient-constructor';
import { RootState } from 'services/store';
import BunBurger from './bun-ingredient-constructor';

const CLASS_NAME_TEXT_CONSTRUCTOR = `${styles.constructor__text_default} text text_type_main-default`;

  // дефолтное состояние без ингридиентов
  const DefaultIngridient: FC = () => (
    <p className={CLASS_NAME_TEXT_CONSTRUCTOR}>
      Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
    </p>
  );

export const ListIngridientBurger: FC = () => {
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingridient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      if (item.type !== 'bun') {
        dispatch(changeStateElem('add', item));
      } else {
        dispatch({ type: ADD_BUN_CONSTRUCTOR, item: item });
      }
    },
  });

  const { ingridientsConstructor, bunConstructor } = useSelector(
    (store: RootState) => store.burgerConstructor
  );

  // проверяем наличие ингридиентов в конструкторе чтоб выводить дефолтное состояние
  const isHaveIngridient =
    bunConstructor.length !== 0 || ingridientsConstructor.length !== 0
      ? false
      : true;

  // проверяем наличие булок
  const isHaveBun = bunConstructor.length === 0 ? false : true;
  

  const CLASS_NAME_WRAPPER = `${styles.wrapper} ${
    isHover ? styles.hover_dnd : ''
  }`;

  return (
    <>
      {isHaveBun && <BunBurger ingredientsBun={bunConstructor} type='top' />}
      <div ref={dropTarget} className={CLASS_NAME_WRAPPER}>
        {isHaveIngridient ? (
          <DefaultIngridient />
        ) : (
          ingridientsConstructor.map((ingredient: any, i: number) => (
            <IngredientConstructor
              key={ingredient.uuid}
              index={i}
              ingredient={ingredient}
            />
          ))
        )}
      </div>
      {isHaveBun && <BunBurger ingredientsBun={bunConstructor} type='bottom' />}
    </>
  );
};
