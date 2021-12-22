/* eslint-disable react-hooks/exhaustive-deps */
import styles from './app.module.css';
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { RootState } from 'services/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { getDataIngridietn } from '../../services/actions/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export default function App() {
    const dispatch = useDispatch();
    const isLoding = useSelector(
        (store: RootState) => store.igridients.isLoding
    );

    useEffect(() => {
        dispatch(getDataIngridietn(INGREDIENTS_URL));
    }, []);

    console.log(useSelector((store: RootState) => store));

    return (
        <>
            <AppHeader />
            {isLoding && (
                <main className={styles.container}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
                </main>
            )}
        </>
    );
}
