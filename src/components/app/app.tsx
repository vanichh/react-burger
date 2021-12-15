import styles from './app.module.css';
import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients  from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export default function App() {
    const [dataIngredients, setDataIngredients] = useState([]);
    const [isLoding, setIsLoding] = useState<boolean>(false);

    useEffect(() => {
        fetch(INGREDIENTS_URL)
            .then((res) => res.json())
            .then((response) => {
                if (response.success) {
                    setDataIngredients(response.data);
                    setIsLoding(true);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <AppHeader />
            {isLoding && (
                <main className={styles.container}>
                    <BurgerIngredients dataIngredients={dataIngredients} />
                    <BurgerConstructor dataIngredients ={dataIngredients} />
                </main>
            )}
        </>
    );
}
