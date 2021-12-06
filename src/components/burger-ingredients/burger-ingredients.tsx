import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';
import iconIngreidient from '../../images/burger-ingredients/icon-ingridients.png';
import DataProps from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ModalOverlay from '../modal-overlay/modal-overlay';

const BurgerIngredients = ({
    data,
}: {
    data: Array<DataProps>;
}): JSX.Element => {
    const ModalWindow = (props: any) => {
        console.log(1);
        return (
            <ModalOverlay>
                <Modal>
                    <IngredientDetails {...props} />
                </Modal>
            </ModalOverlay>
        );
    };

    return (
        <section className={`${styles.ingridients} pt-25 ml-4 mr-4`}>
            <div
                className={`${styles.ingridients__wrapper} ${styles.ingridients__wrapper_align} mb-4 ml-4 mr-6`}
            >
                <ConstructorElement
                    type={'top'}
                    handleClose={() => false}
                    price={data[0].price}
                    text={`${data[0].name}(верх)`}
                    thumbnail={data[0].image}
                    isLocked={true}
                />
            </div>
            <div className={styles.wrapper}>
                {data.slice(1, -1).map((item) => (
                    <div
                        key={item._id}
                        className={`${styles.ingridients__wrapper} mb-4 ml-4 mr-4`}
                        onClick={() => ModalWindow({ ...item })}
                    >
                        <img
                            src={iconIngreidient}
                            alt={item.name}
                            className={styles.ingridients__img}
                        />
                        <ConstructorElement
                            type={undefined}
                            handleClose={() => false}
                            price={item.price}
                            text={item.name}
                            thumbnail={item.image}
                            isLocked={false}
                        />
                    </div>
                ))}
            </div>
            <div
                className={`${styles.ingridients__wrapper} ${styles.ingridients__wrapper_align} mt-4 ml-4 mr-6`}
            >
                <ConstructorElement
                    type={'bottom'}
                    handleClose={() => false}
                    price={data[data.length - 1].price}
                    text={`${data[data.length - 1].name}(низ)`}
                    thumbnail={data[data.length - 1].image}
                    isLocked={true}
                />
            </div>
            <div className={`${styles.ingridients__buy} mt-10`}>
                <div className={`${styles.ingridients__wrapper} mr-10`}>
                    <p className='text text_type_digits-medium mr-2'>640</p>
                    <CurrencyIcon type='primary' />
                </div>
                <Button type='primary' size='large'>
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};

export default BurgerIngredients;
