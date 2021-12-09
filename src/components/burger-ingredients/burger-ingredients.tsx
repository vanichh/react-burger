import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import ElemBurgerIngredients from './elem-burger-ingredients';
import DataProps from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
type ingtidientType = 'bun' | 'sauce' | 'main';
export const BurgerIngredients = ({
    dataIngredients,
}: {
    dataIngredients: Array<DataProps>;
}): JSX.Element => {
    const [current, setCurrent] = useState<ingtidientType>('bun');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [propsModal, SetPropsModal] = useState({});
    const ModalWindow = (props: any): JSX.Element => {
        return (
            <Modal setIsModalOpen={setIsModalOpen}>
                <IngredientDetails {...props} />
            </Modal>
        );
    };

    const onenWindows = (elem: any) => {
        SetPropsModal({ ...elem });
        setIsModalOpen(true);
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
                            {dataIngredients
                                .filter((elem: any) => elem.type === item)
                                .map((elem: any) => (
                                    <ElemBurgerIngredients
                                        onenWindows={onenWindows.bind(
                                            null,
                                            elem
                                        )}
                                        key={elem._id}
                                        {...elem}
                                    />
                                ))}
                        </div>
                    </section>
                ))}
            </div>
            {isModalOpen && <ModalWindow {...propsModal} />}
        </section>
    );
};

export default BurgerIngredients;
