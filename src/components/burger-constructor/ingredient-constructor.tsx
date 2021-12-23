import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch,  } from 'react-redux';
import { changeStateElem } from 'services/actions/constructor';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import styles from './burger-constructor.module.css';

export const IngredientConstructor = ({ ingredient }: any) => {
  
    const dispatch = useDispatch();

    // удаление ингридиента
  const deleteIngredient = () => {
    dispatch(changeStateElem('delete', ingredient))
  };

  return (
    <div
      key={ingredient._id}
      className={`${styles.constructor__wrapper} mb-4 ml-4 mr-4`}
    >
      <img
        src={iconIngreidient}
        alt={ingredient.name}
        className={styles.constructor__img}
      />
      <ConstructorElement
        type={undefined}
        handleClose={() => deleteIngredient()}
        price={ingredient.price}
        text={ingredient.name}
        thumbnail={ingredient.image_mobile}
        isLocked={false}
      />
    </div>
  );
};

export default IngredientConstructor;
