import React from 'react';
import {
    Counter,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const ElemConstructor = ({ name, image, fat }: any): JSX.Element => {
    const [current, setCurrent] = React.useState(0);

    const cuppentPlus = () => setCurrent((prev) => ++prev);

    return (
        <div
            className={`${styles.constructor__items} mt-6 ml-6 mb-10 mr-4`}
            onClick={cuppentPlus}
        >
            <Counter count={current} size='default' />
            <img className='ml-4 mr-4' src={image} alt={name} />
            <div className={`${styles.constructor__wrapper} mt-4 mb-4`}>
                <p className='text text_type_main-medium mr-2'>{fat}</p>
                <CurrencyIcon type='primary' />
            </div>
            <p className='text text_type_main-default'>{name}</p>
        </div>
    );
};

export default ElemConstructor;
