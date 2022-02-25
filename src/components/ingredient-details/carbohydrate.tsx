import { FC } from 'react';
import styles from './ingredient-details.module.css';

interface IPropsCarbohydrate {
  name: string;
  count: number;
}

const CLASS_NAME_TEXT = `${styles.details__wrapper} text text_type_main-default text_color_inactive`;

export const Carbohydrate: FC<IPropsCarbohydrate> = ({ name, count }) => {
  return (
    <div className={CLASS_NAME_TEXT}>
      <p className={styles.details__text}>{name}</p>
      <p className={styles.details__text}>{count}</p>
    </div>
  );
};
