/* eslint-disable react-hooks/exhaustive-deps */
import styles from './ingredient-details.module.css';
import { Carbohydrate } from './carbohydrate'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'services/store';
import { useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { getIngridient } from 'services/actions/ingredients';


export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { isLoadingIngredientDetails, isLoding } =
    useSelector((state: RootState) => state.igridients);

  const { ingredientDetails } = useSelector(
    (state: RootState) => state.igridients
  );

  useEffect(() => {
    if (isLoding) {
      dispatch(getIngridient(id));
    }
  }, [isLoding]);


  return (
    <>
      {isLoadingIngredientDetails && (
        <>
          <img
            className='mb-4'
            src={ingredientDetails.image_large}
            alt={ingredientDetails.name}
          />
          <p className='text text_type_main-medium mb-8'>
            {ingredientDetails.name}
          </p>
          <div className={styles.wpapper}>
            <Carbohydrate
              name='Калории, ккал'
              count={ingredientDetails.calories}
            />
            <Carbohydrate name='Белки, г' count={ingredientDetails.proteins} />
            <Carbohydrate name='Жиры, г' count={ingredientDetails.fat} />
            <Carbohydrate
              name='Углеводы, г'
              count={ingredientDetails.carbohydrates}
            />
          </div>
        </>
      )}
    </>
  );
};
