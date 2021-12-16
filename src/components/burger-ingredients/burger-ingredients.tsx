import { useState, useContext, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { BurgerContext } from '../contexts/burger-context';
import SectionIngredients from './section-ingredients';
type ingredientType = 'bun' | 'sauce' | 'main';

export const BurgerIngredients = (): JSX.Element => {
    const refBun = useRef<HTMLElement>(null);
    const refSause = useRef<HTMLElement>(null);
    const refMain = useRef<HTMLElement>(null);
    const dataIngredients = useContext(BurgerContext);
    const [current, setCurrent] = useState<ingredientType>('bun');

    return (
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
            <div className={styles.wrapper}>
                <SectionIngredients
                    refElem={refBun}
                    title='Булки'
                    dataIngredients={dataIngredients.filter(
                        (elem) => elem.type === 'bun'
                    )}
                />
                <SectionIngredients
                    refElem={refSause}
                    title='Соусы'
                    dataIngredients={dataIngredients.filter(
                        (elem) => elem.type === 'sauce'
                    )}
                />
                <SectionIngredients
                    refElem={refMain}
                    title='Начинки'
                    dataIngredients={dataIngredients.filter(
                        (elem) => elem.type === 'main'
                    )}
                />
            </div>
        </section>
    );
};

export default BurgerIngredients;
