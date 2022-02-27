import { FC, ReactNode } from 'react';
import { IDataProps } from 'utils/types';
import styles from './order-list.module.css';

interface IListImgIgridients {
  ArrIdIngredients: string[];
  listIgridients: IDataProps[];
  children?: ReactNode;
}

let counterIdIngredients: null | number = null;

export const ListImgIgridients: FC<IListImgIgridients> = (props) => {
  const { ArrIdIngredients, listIgridients } = props;

  let ArrIgridients = ArrIdIngredients.map((id) =>
    listIgridients.find(({ _id }) => _id === id)
  );

  if (ArrIgridients.length > 6) {
    counterIdIngredients = ArrIgridients.length - 6;
    ArrIdIngredients.splice(6);
  }

  let iRight = -16;
  let zIndex = 999;

  const counterMoreIdIngredients: JSX.Element = (
    <p className={`text text_type_digits-default ${styles.counter}`}>
      +{counterIdIngredients}
    </p>
  );

  return (
    <ul className={styles.listIcon}>
      {ArrIgridients.map(({ image_mobile, name, _id }, i) => (
        <li
          className={styles.item}
          style={{ right: (iRight += 16), zIndex: (zIndex -= 1) }}
          key={_id + i}
        >
          <img className={styles.icon} src={image_mobile} alt={name} />
          {i === 5 && counterIdIngredients ? counterMoreIdIngredients : null}
        </li>
      ))}
    </ul>
  );
};
