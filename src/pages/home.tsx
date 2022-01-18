/* eslint-disable react-hooks/exhaustive-deps */
import styles from 'components/app/app.module.css';
import { RootState } from 'services/store';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ErrorComponent from 'components/app/error-request';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';

export const HomePage = () => {
  const isLoding: boolean = useSelector(
    (store: RootState) => store.igridients.isLoding
  );
  const IsError: boolean = useSelector(
    (store: RootState) => store.igridients.errorRequest
  );

  return (
    <>
      {isLoding && (
        <main className={styles.container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
      {IsError && <ErrorComponent />}
    </>
  );
};
