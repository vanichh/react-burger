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
    const [current, setCurrent] = React.useState<'bun' | 'sauce' | 'main'>(
        'bun'
    );
    const titleIngridient = {
        bun: 'Булки',
        sauce: 'Соусы',
        main: 'Начинки',
    };

    return (
        <section className={`${styles.constructor} ml-10`}>
            <h2 className='text text_type_main-large mt-10'>Соберите бургер</h2>
            <div className={`${styles.list} mt-5`}>
                <Tab
                    value='bun'
                    active={current === 'bun'}
                    onClick={() => setCurrent('bun')}
                >
                    Булки
                </Tab>
                <Tab
                    value='sauce'
                    active={current === 'sauce'}
                    onClick={() => setCurrent('sauce')}
                >
                    Соусы
                </Tab>
                <Tab
                    value='main'
                    active={current === 'main'}
                    onClick={() => setCurrent('main')}
                >
                    Начинки
                </Tab>
            </div>
            <h3 className='text text_type_main-medium mt-5'>
                {titleIngridient[current]}
            </h3>
            <div className={styles.constructor__list}>
                {props.data
                    .filter((elem: any) => elem.type === current)
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
