/* eslint-disable react-hooks/exhaustive-deps */
import { IngredientDetails } from 'components/ingredient-details/ingredient-details';

import styles from './page.module.css';

export const IngredientPage = () => {
  return (
    <>
      <div className={styles.aligin_wrapper}>
        <IngredientDetails />
      </div>
    </>
  );
};
