import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import DataProps from '../../utils/types';

interface PropsBunBurger {
  ingredientsBun: DataProps;
  type: 'top' | 'bottom';
}

const BunBurger = ({ ingredientsBun, type }: PropsBunBurger): JSX.Element => {

  const CLASSNAME_BUN: string = `
    ${styles.constructor__wrapper}
    ${styles.constructor__wrapper_align}
    ${type === 'top' ? 'mb-4' : 'mt-4'} ml-4 mr-6 
    `;
  return (
    <div
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
