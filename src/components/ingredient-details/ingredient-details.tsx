import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';

type stateingredient<T = string> = {
  name: T;
  image_large: T;
  calories: T;
  proteins: T;
  fat: T;
  carbohydrates: T;
};

const IngredientDetails: React.FC = () => {
  const {
    name,
    image_large,
    calories,
    proteins,
    fat,
    carbohydrates,
  }: stateingredient= useSelector(
    (state: RootState) => state.igridients.ingredientDetails
  );
  const CLASSNAME_TEXT: string = `${styles.details__text} text text_type_main-default text_color_inactive`;
  return (
    <>
      <img className='mb-4' src={image_large} alt={name} />
      <p className='text text_type_main-medium mb-8'>{name}</p>
      <div className={styles.wpapper}>
        <p className={CLASSNAME_TEXT}>
          Калории, ккал
          <br />
          {calories}
        </p>
        <p className={CLASSNAME_TEXT}>
          Белки, г
          <br />
          {proteins}
        </p>
        <p className={CLASSNAME_TEXT}>
          Жиры, г
          <br />
          {fat}
        </p>
        <p className={CLASSNAME_TEXT}>
          Углеводы, г
          <br />
          {carbohydrates}
        </p>
      </div>
    </>
  );
};

export default IngredientDetails;
