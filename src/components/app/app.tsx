import styles from './app.module.css';
import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

export default function App() {
    const [data, setData] = useState([]);
    const [isLoding, setIsLoding] = useState<boolean>(false);

    useEffect(() => {
        const urlString = 'https://norma.nomoreparties.space/api/ingredients';
        fetch(urlString)
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                if (response.success) {
                    setData(response.data);
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
                    <BurgerConstructor data={data} />
                    <BurgerIngredients data={data} />
                </main>
            )}
        </>
    );
}
