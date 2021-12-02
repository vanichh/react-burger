import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

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
    const ElemIngredients = ({
        type,
        isLocked,
        handleClose,
        text,
        thumbnail,
        price,
    }: any): JSX.Element => {
        return (
            <ConstructorElement
                type={type}
                isLocked={isLocked}
                handleClose={handleClose}
                text={text}
                thumbnail={thumbnail}
                price={price}
            />
        );
    };

    return (
        <section className={`${styles.ingridients} mt-25 ml-4 mr-4`}>
            {props.data.map((item, index, array) => (
                <div
                    key={item._id}
                    className={`${styles.ingridients__wrapper} mb-4`}
                >
                    <ElemIngredients
                        type={
                            index === 0
                                ? 'top'
                                : index === array.length - 1
                                ? 'bottom'
                                : undefined
                        }
                        handleClose={false}
                        price={item.price}
                        text={item.name}
                        thumbnail={item.image}
                    />
                </div>
            ))}
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
