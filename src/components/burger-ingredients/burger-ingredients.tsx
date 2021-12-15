import { useState, useContext, useRef, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import ElemBurgerIngredients from './elem-burger-ingredients';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { BurgerContext } from '../contexts/burger-context';
type ingredientType = 'bun' | 'sauce' | 'main';
enum titleIngridient {
    bun = 'Булки',
    sauce = 'Соусы',
    main = 'Начинки',
}
const ARR_TYPE_INGREDIENT: ingredientType[] = ['bun', 'sauce', 'main'];

export const BurgerIngredients = (): JSX.Element => {
    const refIngredients = useRef(null);
    const dataIngredients = useContext(BurgerContext);
    const [current, setCurrent] = useState<ingredientType>('bun');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [propsModal, SetPropsModal] = useState({});

    const ModalWindow = (props: any): JSX.Element => {
        return (
            <Modal title={'Детали Ингридиента'} setIsModalOpen={setIsModalOpen}>
                <IngredientDetails {...props} />
            </Modal>
        );
    };
    const openWindows = (elem: any): void => {
        SetPropsModal({ ...elem });
        setIsModalOpen(true);
    };

    useEffect(() => {

        window.addEventListener('keydown', ({ key }) => {
            if (key === 'Tab') {
                console.log(1)
            }
        });    
    const elem = refIngredients.current;
    elem.querySelector(`#${current}`).scrollIntoView(true);

    }, [current]);

    return (
        <section className={`${styles.ingredients} ml-10`}>
            <h2 className='text text_type_main-large mt-10 mb-5'>
                Соберите бургер
            </h2>
            <div className={`${styles.list}`}>
                <Tab
                    value='bun'
                    active={current === 'bun'}
                    onClick={() => setCurrent('bun')}>
                    {titleIngridient['bun']}
                </Tab>
                <Tab
                    value='sauce'
                    active={current === 'sauce'}
                    onClick={() => setCurrent('sauce')}>
                    {titleIngridient['sauce']}
                </Tab>
                <Tab
                    value='main'
                    active={current === 'main'}
                    onClick={() => setCurrent('main')}>
                    {titleIngridient['main']}
                </Tab>
            </div>
            <div ref={refIngredients} className={styles.wrapper}>
                {ARR_TYPE_INGREDIENT.map((item, index) => (
                    <section key={index} id={item}>
                        <h3 className='text text_type_main-medium mt-5 mb-4'>
                            {titleIngridient[item]}
                        </h3>
                        <div className={styles.ingredients__list}>
                            {dataIngredients
                                .filter((elem: any) => elem.type === item)
                                .map((elem: any) => (
                                    <ElemBurgerIngredients
                                        onenWindows={openWindows.bind(
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
