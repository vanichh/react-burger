import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import styles from './burger-constructor.module.css';

export const IngredientsConstructor = ({ingredients}:any) => {
    return (
        <div
            key={ingredients._id}
            className={`${styles.constructor__wrapper} mb-4 ml-4 mr-4`}
        >
            <img
                src={iconIngreidient}
                alt={ingredients.name}
                className={styles.constructor__img}
            />
            <ConstructorElement
                type={undefined}
                handleClose={() => true}
                price={ingredients.price}
                text={ingredients.name}
                thumbnail={ingredients.image_mobile}
                isLocked={false}
            />
        </div>
    );
};

export default IngredientsConstructor;