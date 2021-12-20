import React from 'react';
import {
    Counter,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useDispatch } from 'react-redux';
import { SET_INGRIDIENT_MODAL } from '../../services/actions';

const CLASSNAMEDIV = `${styles.ingredients__items} mt-6 ml-4 mb-10 mr-4`;

const ElemBurgerIngredients = (props: any): JSX.Element => {
    const dispatch = useDispatch();
    const [current, setCurrent] = React.useState<number>(0);

    return (
        <div
            className={CLASSNAMEDIV}
            onClick={() => {
                setCurrent(prev => ++prev);
                dispatch({ type: SET_INGRIDIENT_MODAL, item: props });
            }}>
            {current ? <Counter count={current} size='default' /> : null}
            <img className='ml-4 mr-4' src={props.image} alt={props.name} />
            <div className={`${styles.ingredients__wrapper} mt-4 mb-4`}>
                <p className='text text_type_main-medium mr-2'>{props.fat}</p>
                <CurrencyIcon type='primary' />
            </div>
            <p className='text text_type_main-default'>{props.name}</p>
        </div>
    );
};

export default ElemBurgerIngredients;
