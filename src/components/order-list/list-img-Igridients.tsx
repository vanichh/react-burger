import { FC, ReactNode } from 'react';
import { IDataProps } from 'utils/types';
import { useSelector } from 'services/types';
import styles from './order-list.module.css';

interface IListImgIgridients {
  ArrIdIngredients: string[];
  children?: ReactNode;
}
let counterIdIngredients: null | number = null;

export const ListImgIgridients: FC<IListImgIgridients> = ({
  ArrIdIngredients,
}) => {
  const { listIgridients }: { listIgridients: IDataProps[] } = useSelector(
    store => store.igridients
  );

  let ArrIgridients = ArrIdIngredients.map(id =>
    listIgridients.find(({ _id }) => _id === id)
  );

  if (ArrIgridients.length > 6) {
    ArrIdIngredients.splice(6);
    counterIdIngredients = ArrIgridients.length - 6;
  }

  let iRight = -16;
  let zIndex = 999;

  const counterMoreIdIngredients: JSX.Element = (
    <div
      style={{ right: iRight }}
      className={`text text_type_main-small ${styles.counter}`}>
      +{counterIdIngredients}
    </div>
  );

  return (
    <ul className={styles.listIcon}>
      {ArrIgridients.map(({ image_mobile, name, _id }, i) => (
        <li
          className={styles.item}
          style={{ right: (iRight += 16), zIndex: (zIndex -= 1) }}
          key={_id + i}>
          <img className={styles.icon} src={image_mobile} alt={name} />
          {i === 6 ? counterIdIngredients || counterMoreIdIngredients : null}
        </li>
      ))}
    </ul>
  );
};
