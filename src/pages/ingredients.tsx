/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { IngredientDetails } from 'components/ingredient-details/ingredient-details';
import { Wrapper } from 'components/wrapper';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';
import { NotFound404 } from './not-found-404';
import styles from './page.module.css';

export const IngredientPage: FC = () => {
  const { NoSerchIngredientDetails } = useSelector(
    (state: RootState) => state.igridients
  );

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
