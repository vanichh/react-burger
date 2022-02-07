import styles from './burger-constructor.module.css';
import { FC } from 'React';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { IDataProps } from '../../utils/types';

interface IPropsBunBurger {
  ingredientsBun: IDataProps;
  type: 'top' | 'bottom';
}

export const BunBurger: FC<IPropsBunBurger> = ({ ingredientsBun, type }) => {
  const CLASSNAME_BUN: string = `
    ${styles.constructor__wrapper}
    ${styles.constructor__wrapper_align}
    ${type === 'top' ? 'mb-4' : 'mt-4'} ml-4 mr-6 
    `;
  return (
    <div className={CLASSNAME_BUN}>
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
