import styles from './burger-constructor.module.css';
import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'services/types';
import { changeStateElem } from 'services/actions/constructor';
import { IngredientConstructor } from './ingredient-constructor';
import { BunBurger } from './bun-ingredient-constructor';
import { addBunConstructor } from 'services/actions';
import { IDataProps } from 'utils/types';
import cn from 'classnames';

const CLASS_NAME_TEXT = `${styles.constructor__text_default} text text_type_main-default`;

// дефолтное состояние без ингридиентов
const DefaultIngridient: FC = () => (
  <p className={CLASS_NAME_TEXT}>
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
    drop(item: IDataProps) {
      if (item.type !== 'bun') {
        dispatch(changeStateElem('add', item));
      } else {
        dispatch(addBunConstructor(item));
      }
    },
  });

  const { ingridientsConstructor, bunConstructor } = useSelector(
    (store) => store.burgerConstructor
  );

  // проверяем наличие ингридиентов в конструкторе чтоб выводить дефолтное состояние
  const isHaveIngridient =
    bunConstructor || ingridientsConstructor.length ? false : true;

  return (
    <>
      {bunConstructor && (
        <BunBurger ingredientsBun={bunConstructor} type='top' />
      )}
      <div
        ref={dropTarget}
        className={cn(styles.wrapper, {
          [styles.hover_dnd]: isHover,
        })}
      >
        {isHaveIngridient ? (
          <DefaultIngridient />
        ) : (
          ingridientsConstructor.map((ingredient, i) => (
            <IngredientConstructor
              key={ingredient.uuid}
              index={i}
              ingredient={ingredient}
            />
          ))
        )}
      </div>
      {bunConstructor && (
        <BunBurger ingredientsBun={bunConstructor} type='bottom' />
      )}
    </>
  );
};
