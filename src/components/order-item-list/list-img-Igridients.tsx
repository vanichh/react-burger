import { FC, ReactNode } from 'react';
import { IDataProps } from 'utils/types';
import { useSelector } from 'services/types';
import styles from './order-item-list.module.css';

interface IListImgIgridients {
  ArrIdIngredients: string[];
  children?: ReactNode;
}

export const ListImgIgridients: FC<IListImgIgridients> = ({
  ArrIdIngredients,
}) => {
  const { listIgridients }: { listIgridients: IDataProps[] } = useSelector(
    (store) => store.igridients
  );

  const ArrIgridients = listIgridients.filter(({ _id }) =>
    ArrIdIngredients.includes(_id)
  );

  let iRight = -16;
  let zIndex = 999;

  return (
    <ul className={styles.listIcon}>
      {ArrIgridients.map(({ image_mobile, name, _id }) => (
        <li
          className={styles.item}
          style={{ right: (iRight += 16), zIndex: (zIndex -= 1) }}
        >
          <img
            className={styles.icon}
            key={_id}
            src={image_mobile}
            alt={name}
          />
        </li>
      ))}
    </ul>
  );
};
