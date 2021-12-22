import styles from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { countOrderSum } from 'services/actions/constructor';
import Ingredient from './ingredient-constructor';
import { RootState } from 'services/reducers';

export const ListIngridientBurger = () => {
  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: 'ingridient',
    drop(item) {
      // console.log(item);
      dispatch(countOrderSum('plus', item));
    },
  });

  const ingridients = useSelector(
    (store: RootState) => store.burgerConstructor.ingridientsConstructor
  );

  const DefaultIngridient = () => {
    return (
      <p
        style={{ textAlign: 'center' }}
        className='text text_type_main-default mt-20 mb-20'
      >
        Перенесите сюда нужные ингридиенты из левого столбца
      </p>
    );
  };
  console.log(ingridients);
  return (
    <div ref={dropTarget} className={styles.wrapper}>
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
