import React from 'react';
import {
    Counter,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';

interface ElemBurgerIngredientsProps {
    name: string;
    image: string;
    fat: string;
    onenWindows: () => void;
}

const ElemBurgerIngredients = ({
    name,
    image,
    fat,
    onenWindows,
}: ElemBurgerIngredientsProps): JSX.Element => {
    const [current, setCurrent] = React.useState<number>(0);

    const cuppentPlus = () => setCurrent((prev) => ++prev);

    return (
        <div
            className={`${styles.ingredients__items} mt-6 ml-4 mb-10 mr-4`}
            onClick={() => {
                onenWindows();
                cuppentPlus();
            }}
        >
            {current ? <Counter count={current} size='default' /> : null}
            <img className='ml-4 mr-4' src={image} alt={name} />
            <div className={`${styles.ingredients__wrapper} mt-4 mb-4`}>
                <p className='text text_type_main-medium mr-2'>{fat}</p>
                <CurrencyIcon type='primary' />
            </div>
            <p className='text text_type_main-default'>{name}</p>
        </div>
    );
};

export default ElemBurgerIngredients;
