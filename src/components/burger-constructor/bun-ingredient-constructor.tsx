import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import DataProps from '../../utils/types';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { UPDATE_BUN_CONSTRUCTOR } from 'services/actions/constructor';

interface PropsBunBurger {
  ingredientsBun: DataProps;
  type: 'top' | 'bottom';
}

const BunBurger = ({ ingredientsBun, type }: PropsBunBurger): JSX.Element => {
  const dispatch = useDispatch();

  const [{isHover}, dropTarget] = useDrop({
    accept: 'bun',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      dispatch({ type: UPDATE_BUN_CONSTRUCTOR, item: item });
    },
  });

  const CLASSNAME_BUN: string = `
    ${styles.constructor__wrapper}
    ${styles.constructor__wrapper_align}
    ${isHover ? styles.hover_dnd : ''} 
    ${type === 'top' ? 'mb-4' : 'mt-4'} ml-4 mr-6
    `;
  return (
    <div
      ref={dropTarget}
      className={CLASSNAME_BUN}
    >
      <ConstructorElement
        type={type}
        handleClose={() => false}
        price={ingredientsBun.price}
        text={`${ingredientsBun.name}${type === 'top' ? '(верх)' : '(низ)'}`}
        thumbnail={ingredientsBun.image_mobile}
        isLocked={true}
      />
    </div>
  );
};

export default BunBurger;
