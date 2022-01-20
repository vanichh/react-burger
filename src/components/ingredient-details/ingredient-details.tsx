import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';
import { useLocation } from 'react-router-dom';

type stateingredient<T = string> = {
  name: T;
  image_large: T;
  calories: T;
  proteins: T;
  fat: T;
  carbohydrates: T;
};

interface PropsCarbohydrate {
  name: string;
  count: string;
}

const Carbohydrate: React.FC<PropsCarbohydrate> = ({ name, count }) => {
  const CLASSNAME_TEXT: string = `${styles.details__wrapper} text text_type_main-default text_color_inactive`;
  return (
    <div className={CLASSNAME_TEXT}>
      <p className={styles.details__text}>{name}</p>
      <p className={styles.details__text}>{count}</p>
    </div>
  );
};

export const IngredientDetails: React.FC = () => {
  let location = useLocation();
  console.log(location)
  const {
    name,
    image_large,
    calories,
    proteins,
    fat,
    carbohydrates,
  }: stateingredient = useSelector(
    (state: RootState) => state.igridients.ingredientDetails
  );

  return (
    <>
      <img className='mb-4' src={image_large} alt={name} />
      <p className='text text_type_main-medium mb-8'>{name}</p>
      <div className={styles.wpapper}>
        <Carbohydrate name='Калории, ккал' count={calories} />
        <Carbohydrate name='Белки, г' count={proteins} />
        <Carbohydrate name='Жиры, г' count={fat} />
        <Carbohydrate name='Углеводы, г' count={carbohydrates} />
      </div>
    </>
  );
};

export default IngredientDetails;
