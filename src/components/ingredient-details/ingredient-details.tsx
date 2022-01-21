/* eslint-disable react-hooks/exhaustive-deps */
import styles from './ingredient-details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'services/store';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getIngridient } from 'services/actions/ingredients';
import { NotFound404 } from 'pages';

interface PropsCarbohydrate {
  name: string;
  count: string;
}

const CLASS_NAME_TEXT: string = `${styles.details__wrapper} text text_type_main-default text_color_inactive`;

const Carbohydrate: React.FC<PropsCarbohydrate> = ({ name, count }) => {
  
  return (
    <div className={CLASS_NAME_TEXT}>
      <p className={styles.details__text}>{name}</p>
      <p className={styles.details__text}>{count}</p>
    </div>
  );
};

export const IngredientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { isLoadingIngredientDetails, isLoding, NoSerchIngredientDetails } =
    useSelector((state: RootState) => state.igridients);

  const { ingredientDetails } = useSelector(
    (state: RootState) => state.igridients
  );

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

