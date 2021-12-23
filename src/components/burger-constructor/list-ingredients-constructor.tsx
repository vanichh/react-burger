import styles from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { changeStateElem } from 'services/actions/constructor';
import Ingredient from './ingredient-constructor';
import { RootState } from 'services/reducers';

export const ListIngridientBurger = () => {
  
  const dispatch = useDispatch();
  
  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingridient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      const newItem = { ...item };
      newItem.idList = Math.random();
      dispatch(changeStateElem('add', newItem));
    },
  });

  const ingridients = useSelector(
    (store: RootState) => store.burgerConstructor.ingridientsConstructor
  );

  // дефолтное состояние без ингридиентов
  const DefaultIngridient = () => {
    return (
      <p
        className={`${styles.constructor__text_default} text text_type_main-default`}
      >
        Перенесите сюда нужные ингридиенты из левого меню
      </p>
    );
  };

  return (
    <div
      ref={dropTarget}
      className={`${styles.wrapper} ${
        isHover ? styles.hover_dnd : ''
      }`}
    >
      {ingridients.length === 0 ? (
        <DefaultIngridient />
      ) : (
        ingridients.map((ingredient: any, i: number) => (
          <Ingredient key={ingredient._id + i} ingredient={ingredient} />
        ))
      )}
    </div>
  );
};

export default ListIngridientBurger;
