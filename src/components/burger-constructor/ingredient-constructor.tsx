import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeStateElem,
  movingIngridient,
} from 'services/actions/constructor';
import { RootState } from 'services/store';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import styles from './burger-constructor.module.css';

export const IngredientConstructor = ({ ingredient, index }: any) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const ingridients = useSelector(
    (store: RootState) => store.burgerConstructor.ingridientsConstructor
  );

  const [{ isDragging }, dragRef] = useDrag({
    type: 'locationIngridient',
    item: ingredient,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isHover }, dropRef] = useDrop({
    accept: 'locationIngridient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      dispatch(movingIngridient(item, index));
    },
  });

  // удаление ингридиента
  const deleteIngredient = () => {
    dispatch(changeStateElem('delete', ingredient));
  };

  dragRef(dropRef(ref));

  const margin = index === ingridients.length - 1 ? 'pb-25' : 'pt-25';

  const CLASSNAME_WRAPPER = `
  ${styles.constructor__wrapper} 
  mb-4 ml-4 mr-4 
  ${isHover ? margin : ''}`;

  return (
    <>
      {!isDragging ? (
        <div ref={ref} key={ingredient._id} className={CLASSNAME_WRAPPER}>
          <img
            src={iconIngreidient}
            alt={ingredient.name}
            className={styles.constructor__img}
          />
          <ConstructorElement
            type={undefined}
            handleClose={() => deleteIngredient()}
            price={ingredient.price}
            text={ingredient.name}
            thumbnail={ingredient.image_mobile}
            isLocked={false}
          />
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default IngredientConstructor;
