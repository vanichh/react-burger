import { useState } from 'react';
import styles from './burger-ingredients.module.css';
import ElemBurgerIngredients from './elem-burger-ingredients';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import DataProps from '../../utils/types';

interface PropsSectionIngredients {
    title: string;
    dataIngredients: DataProps[];
    refElem: React.RefObject<HTMLElement>;
}

const CLASSNAME_TITLE = 'text text_type_main-medium mb-4';

const SectionIngredients = ({
    title,
    dataIngredients,
    refElem,
}: PropsSectionIngredients) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openWindows = (): void => {
        setIsModalOpen(true);
    };

    const ModalWindow = (): JSX.Element => {
        return (
            <Modal title='Детали Ингридиента' setIsModalOpen={setIsModalOpen}>
                <IngredientDetails />
            </Modal>
        );
    };

    return (
        <section className='pt-5' ref={refElem}>
            <h3 className={CLASSNAME_TITLE}>{title}</h3>
            <div className={styles.ingredients__list}>
                {dataIngredients.map((elem: any) => (
                    <ElemBurgerIngredients
                        onenWindows={openWindows}
                        key={elem._id}
                        {...elem}
                    />
                ))}
            </div>
            {isModalOpen && <ModalWindow />}
        </section>
    );
};

export default SectionIngredients;
