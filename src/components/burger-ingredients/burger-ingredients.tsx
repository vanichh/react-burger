import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import ElemConstructor from './elem-burger-ingredients';
import DataProps from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ModalOverlay from '../modal-overlay/modal-overlay';
type ingtidientType = 'bun' | 'sauce' | 'main';
export const BurgerIngredients = ({
    data,
}: {
    data: Array<DataProps>;
}): JSX.Element => {
    const [current, setCurrent] = useState<ingtidientType>('bun');
    const [isModal, setisModal] = useState(false);
    const [propsModal, SetPropsModal] = useState({});
    const ModalWindow = (props: any) => {
        return (
            <ModalOverlay IsOpen={setisModal}>
                <Modal IsOpen={setisModal}>
                    <IngredientDetails {...props} />
                </Modal>
            </ModalOverlay>
        );
    };
    enum titleIngridient {
        bun = 'Булки',
        sauce = 'Соусы',
        main = 'Начинки',
    }
    const arrType: ('bun' | 'sauce' | 'main')[] = ['bun', 'sauce', 'main'];

    return (
        <section className={`${styles.ingredients} ml-10`}>
            <h2 className='text text_type_main-large mt-10 mb-5'>
                Соберите бургер
            </h2>
            <div className={`${styles.list}`}>
                <Tab
                    value='bun'
                    active={current === 'bun'}
                    onClick={() => setCurrent('bun')}
                >
                    {titleIngridient['bun']}
                </Tab>
                <Tab
                    value='sauce'
                    active={current === 'sauce'}
                    onClick={() => setCurrent('sauce')}
                >
                    {titleIngridient['sauce']}
                </Tab>
                <Tab
                    value='main'
                    active={current === 'main'}
                    onClick={() => setCurrent('main')}
                >
                    {titleIngridient['main']}
                </Tab>
            </div>
            <div className={styles.wrapper}>
                {arrType.map((item, index) => (
                    <section key={index} id={item}>
                        <h3 className='text text_type_main-medium mt-5 mb-4'>
                            {titleIngridient[item]}
                        </h3>
                        <div className={styles.ingredients__list}>
                            {data
                                .filter((elem: any) => elem.type === item)
                                .map((elem: any) => (
                                    <div
                                        key={elem._id}
                                        onClick={() => {
                                            SetPropsModal({ ...elem });
                                            setisModal(true);
                                        }}
                                    >
                                        <ElemConstructor {...elem} />
                                    </div>
                                ))}
                        </div>
                    </section>
                ))}
            </div>
            {isModal && <ModalWindow {...propsModal} />}
        </section>
    );
};


export default BurgerIngredients;
