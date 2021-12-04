import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';

interface DataProps {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

const BurgerIngredients = (props: { data: Array<DataProps> }): JSX.Element => {
    return (
        <section className={`${styles.ingridients} mt-25 ml-4 mr-4`}>
            <div className={styles.wrapper}>
                {props.data.map((item, index, array) => (
                    <div
                        key={item._id}
                        className={`${styles.ingridients__wrapper} mb-4 ml-4 mr-4`}>
                        <img
                            src={iconIngreidient}
                            alt={item.name}
                            className={styles.ingridients__img}
                        />
                        <ConstructorElement
                            type={
                                index === 0
                                    ? 'top'
                                    : index === array.length - 1
                                    ? 'bottom'
                                    : undefined
                            }
                            handleClose={() => false}
                            price={item.price}
                            text={item.name}
                            thumbnail={item.image}
                        />
                    </div>
                ))}
            </div>
            <div className={`${styles.ingridients__buy} mt-10`}>
                <div className={`${styles.ingridients__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>640</p>
                    <CurrencyIcon type='primary' />
                </div>
                <Button type='primary' size='large'>
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};

export default BurgerIngredients;
