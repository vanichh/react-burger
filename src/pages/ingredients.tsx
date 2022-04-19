/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { IngredientDetails } from 'components/ingredient-details/ingredient-details';
import { Wrapper } from 'ui/wrapper';
import { useSelector } from 'services/types/';
import { NotFound404 } from './not-found-404';
import styles from './page.module.css';

export const IngredientPage: FC = () => {
  const { NoSerchIngredientDetails } = useSelector((state) => state.igridients);

  if (NoSerchIngredientDetails) {
    // если ингридиент не найден
    return <NotFound404 />;
  }

  return (
    <Wrapper className={styles.flex_column}>
      <IngredientDetails />
    </Wrapper>
  );
};
