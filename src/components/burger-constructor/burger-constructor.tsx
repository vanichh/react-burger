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
type ingtidientType = 'bun' | 'sauce' | 'main';
export const BurgerConstructor = ({
    data,
}: {
    data: Array<DataProps>;
}): JSX.Element => {
    const [current, setCurrent] = React.useState<ingtidientType>('bun');
    enum titleIngridient  {
        bun = 'Булки',
        sauce ='Соусы',
        main = 'Начинки',
    };
    const arrType: string[] = ['bun', 'sauce', 'main'];

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
            {arrType.map((item: any, index) => (
                <section key={index} id={item}>
                    <h3 className='text text_type_main-medium mt-5'>
                        {titleIngridient[item]}
                    </h3>
                    <div className={styles.constructor__list}>
                        {data
                            .filter((elem: any) => elem.type === item)
                            .map((elem: any) => (
                                <ElemConstructor key={elem._id} {...elem} />
                            ))}
                    </div>
                </section>
            ))}
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
