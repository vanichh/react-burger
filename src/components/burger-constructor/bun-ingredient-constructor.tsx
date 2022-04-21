import styles from './burger-constructor.module.css';
import { FC } from 'React';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { IDataProps } from '../../utils/types';
import cn from 'classnames';

interface IPropsBunBurger {
  ingredientsBun: IDataProps;
  type: 'top' | 'bottom';
}

export const BunBurger: FC<IPropsBunBurger> = ({ ingredientsBun, type }) => {
  const { price, name, image_mobile } = ingredientsBun;

  const text: string = `${name}${type === 'top' ? '(верх)' : '(низ)'}`;

  return (
    <div
      className={cn(
        styles.constructor__wrapper,
        styles.constructor__wrapper_align,
        'ml-4 mr-6',
        {
          'mb-4': type === 'top',
          'mt-4': type !== 'top',
        }
      )}
    >
      <ConstructorElement
        type={type}
        handleClose={() => false}
        price={price}
        text={text}
        thumbnail={image_mobile}
        isLocked={true}
      />
    </div>
  );
};
