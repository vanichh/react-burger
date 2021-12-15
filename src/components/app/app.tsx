import styles from './app.module.css';
import { useEffect, useState, createContext } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import DataProps from '../../utils/types';
const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const dataBurgerConstructor = createContext<DataProps[]>([]);

export default function App() {
    const [dataIngredients, setDataIngredients] = useState<DataProps[]>([]);
    const [isLoding, setIsLoding] = useState<boolean>(false);

    useEffect(() => {
        fetch(INGREDIENTS_URL)
            .then((res) => res.json())
            .then((response) => {
                if (response.success) {
                    setDataIngredients(response.data);
                    setIsLoding(true);
                    console.log(response.data)
                }
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <dataBurgerConstructor.Provider value={dataIngredients}>
            <AppHeader />
            {isLoding && (
                <main className={styles.container}>
                    <BurgerIngredients dataIngredients={dataIngredients} />
                    <BurgerConstructor />
                </main>
            )}
        </dataBurgerConstructor.Provider>
    );
}
