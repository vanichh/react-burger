import styles from './App.module.css';

import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import DATA from './utils/data';

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
