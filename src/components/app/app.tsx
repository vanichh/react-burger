import styles from './app.module.css';
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { RootState } from 'services/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { getDataIngridietn } from '../../services/actions/ingredients';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export default function App() {
    const dispatch = useDispatch();
    const isLoding = useSelector((store: RootState) => store.cart.isLoding);

    useEffect(() => {
        dispatch(getDataIngridietn(INGREDIENTS_URL));
    }, [dispatch]);

    return (
        <>
            <AppHeader />
            {isLoding && (
                <main className={styles.container}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
            )}
        </>
    );
}
