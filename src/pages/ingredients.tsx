/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { IngredientDetails } from 'components/ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'services/store';
import { useEffect } from 'react';
import { getIngridient } from 'services/actions/ingredients';
import styles from './page.module.css';
import { NotFound404 } from './not-found-404';

export const IngredientPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  console.log('start')

  const { isLoadingIngredientDetails, isLoding, NoSerchIngredientDetails } =
    useSelector((state: RootState) => state.igridients);

  useEffect(() => {
    if (isLoding) {
      dispatch(getIngridient(id));
    }
  }, [isLoding]);

  if (NoSerchIngredientDetails) {
    // если ингридиент не найден
    return <NotFound404 />;
  }

  return (
    <>
      {isLoadingIngredientDetails && (
        <div className={styles.aligin_wrapper}>
          <IngredientDetails />
        </div>
      )}
    </>
  );
};
