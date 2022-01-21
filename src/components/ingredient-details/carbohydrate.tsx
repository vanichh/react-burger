import { FC } from 'react';
import styles from './ingredient-details.module.css';

interface PropsCarbohydrate {
  name: string;
  count: string;
}

const CLASS_NAME_TEXT: string = `${styles.details__wrapper} text text_type_main-default text_color_inactive`;

export const Carbohydrate: FC<PropsCarbohydrate> = ({ name, count }) => {
  return (
    <div className={CLASS_NAME_TEXT}>
      <p className={styles.details__text}>{name}</p>
      <p className={styles.details__text}>{count}</p>
    </div>
  );
};
