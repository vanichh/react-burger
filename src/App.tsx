import styles from './app.module.css';

import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-ingredients/burger-ingredients';
import BurgerIngredients from './components/burger-constructor/burger-constructor';
import DATA from './utils/data';

function App() {
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

export default App;
