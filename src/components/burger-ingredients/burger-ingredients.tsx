import { useState, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import SectionIngredients from './section-ingredients';
import { useSelector } from 'react-redux';
import { RootState } from 'services/reducers';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import Modal from 'components/modal/modal';
import { isModalWindowsIngridient } from 'services/actions/ingredients';

type ingredientType = 'bun' | 'sauce' | 'main';

export const BurgerIngredients = (): JSX.Element => {
    const isModalOpen = useSelector(
        (store: RootState) => store.igridients.isModalOpenIngridients
    );

    const refBun = useRef<HTMLElement>(null);
    const refSause = useRef<HTMLElement>(null);
    const refMain = useRef<HTMLElement>(null);

    const dataIngredients = useSelector(
        (store: RootState) => store.igridients.listIgridients
    );
    const [current, setCurrent] = useState<ingredientType>('bun');

    const ModalWindow: React.FC = () => {
        return (
            <Modal
                isModalWindows={isModalWindowsIngridient}
                title='Детали Ингридиента'
            >
                <IngredientDetails />
            </Modal>
        );
    };

    return (

        <>
            <section className={`${styles.ingredients} ml-10`}>
                <h2 className='text text_type_main-large mt-10 mb-5'>
                    Соберите бургер
                </h2>
                <div className={`${styles.list}`}>
                    <Tab
                        value='bun'
                        active={current === 'bun'}
                        onClick={() => {
                            setCurrent('bun');
                            refBun.current.scrollIntoView(true);
                        }}
                    >
                        Булки
                    </Tab>
                    <Tab
                        value='sauce'
                        active={current === 'sauce'}
                        onClick={() => {
                            setCurrent('sauce');
                            refSause.current.scrollIntoView(true);
                        }}
                    >
                        Соусы
                    </Tab>
                    <Tab
                        value='main'
                        active={current === 'main'}
                        onClick={() => {
                            setCurrent('main');
                            refMain.current.scrollIntoView(true);
                        }}
                    >
                        Начинки
                    </Tab>
                </div>
                <div className={`${styles.wrapper} mb-5`}>
                        <SectionIngredients
                            refElem={refBun}
                            title='Булки'
                            dataIngredients={dataIngredients.filter(
                                (elem: { type: string }) => elem.type === 'bun'
                            )}
                        />
                        <SectionIngredients
                            refElem={refSause}
                            title='Соусы'
                            dataIngredients={dataIngredients.filter(
                                (elem: { type: string }) =>
                                    elem.type === 'sauce'
                            )}
                        />
                        <SectionIngredients
                            refElem={refMain}
                            title='Начинки'
                            dataIngredients={dataIngredients.filter(
                                (elem: { type: string }) => elem.type === 'main'
                            )}
                        />
                </div>
            </section>
            {isModalOpen && <ModalWindow />}
        </>
    );
};

export default BurgerIngredients;
