import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, FC, useState, memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {
  changeStateElem,
  movingIngridient,
} from 'services/actions/constructor';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import styles from './burger-constructor.module.css';
import { IDataProps } from 'utils/types';

interface IPropsIngredientConstructor {
  ingredient: IDataProps;
  index: number;
}

// падиннги для создания пустого пространсва при DnD
const PADDING_TOP = 'pt-25';
const PADDING_BOTTOM = 'pb-25';

export const IngredientConstructor: FC<IPropsIngredientConstructor> = memo(({
  ingredient,
  index,
}) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [newPadding, setNewPadding] = useState('');

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
      if (newPadding === PADDING_BOTTOM) {
        ++index; // учеличиваем индекс чтоб добавить элемент снизу
      }
      dispatch(movingIngridient(item, index));
    },
    hover(i, monitor) {
      const cardDrop = ref.current.getBoundingClientRect();
      const cardDrag = monitor.getClientOffset();
      const marginHeightDnD = cardDrag.y - cardDrop.y;

      // меняем паддинги сверху или снизу элемента на которого навели
      if (marginHeightDnD < 140 && newPadding !== PADDING_TOP) {
        setNewPadding(PADDING_TOP);
      } else if (marginHeightDnD > 140 && newPadding !== PADDING_BOTTOM) {
        setNewPadding(PADDING_BOTTOM);
      }
    },
  });

  // удаление ингридиента
  const deleteIngredient = () => {
    dispatch(changeStateElem('delete', ingredient));
  };

  dragRef(dropRef(ref));

  const CLASSNAME_WRAPPER = `
  ${styles.constructor__wrapper}  ml-4 mr-4 pt-2 pb-2
  ${isHover ? `${styles.constructor__wrapper_activ} ${newPadding}` : ''}
  `;

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
})




