import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import DATA from '../../utils/data';

export default function App() {
    return (
        <>
            <AppHeader />
            <main className={styles.container}>
                <BurgerConstructor data={DATA} />
                <BurgerIngredients data={DATA} />
            </main>
        </>
    );
}
