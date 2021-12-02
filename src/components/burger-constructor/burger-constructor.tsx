import React from 'react';
// import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import ElemConstructor from './elem-constructor';

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
export const BurgerConstructor = (props: {
    data: Array<DataProps>;
}): JSX.Element => {
    const [current, setCurrent] = React.useState('one');

    return (
        <section className={`${styles.constructor} ml-10`}>
            <h2 className='text text_type_main-large mt-10'>Соберите бургер</h2>
            <div className={`${styles.list} mt-5`}>
                <Tab
                    value='one'
                    active={current === 'one'}
                    onClick={setCurrent}
                >
                    Булки
                </Tab>
                <Tab
                    value='two'
                    active={current === 'two'}
                    onClick={setCurrent}
                >
                    Соусы
                </Tab>
                <Tab
                    value='three'
                    active={current === 'three'}
                    onClick={setCurrent}
                >
                    Начинки
                </Tab>
            </div>
            <h3 className='text text_type_main-medium mt-5'>Булки</h3>
            <div className={styles.constructor__list}>
                {props.data
                    .filter((elem: any) => elem.type === 'bun')
                    .map((elem: any) => (
                        <ElemConstructor key={elem._id} {...elem} />
                    ))}
            </div>
            <h3 className='text text_type_main-medium mt-5'>Соусы</h3>
            <div className={styles.constructor__list}>
                {props.data
                    .filter((elem: any) => elem.type === 'sauce')
                    .map((elem: any) => (
                        <ElemConstructor key={elem._id} {...elem} />
                    ))}
            </div>
            <h3 className='text text_type_main-medium mt-5'>Начинки</h3>
            <div className={styles.constructor__list}>
                {props.data
                    .filter((elem: any) => elem.type === 'main')
                    .map((elem: any) => (
                        <ElemConstructor key={elem._id} {...elem} />
                    ))}
            </div>
        </section>
    );
};
// BurgerConstructor.propTypes = {
//     data: PropTypes.shape({
//         _id: PropTypes.string,
//         name: PropTypes.string,
//         type: PropTypes.string,
//         proteins: PropTypes.number,
//         fat: PropTypes.number,
//         carbohydrates: PropTypes.number,
//         calories: PropTypes.number,
//         price: PropTypes.number,
//         image: PropTypes.string,
//         image_mobile: PropTypes.string,
//         image_large: PropTypes.string,
//         __v: PropTypes.number,
//     }),
// };

export default BurgerConstructor;
