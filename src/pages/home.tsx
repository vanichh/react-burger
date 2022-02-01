/* eslint-disable react-hooks/exhaustive-deps */
import styles from 'components/app/app.module.css';
import { FC } from 'React';
import { RootState } from 'services/store';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ErrorRequest as ErrorComponent } from 'components/app/error-request';
import { BurgerIngredients } from 'components/burger-ingredients';
import { BurgerConstructor } from 'components/burger-constructor';

export const HomePage: FC = () => {
  const isLoding: boolean = useSelector(
    (store: RootState) => store.igridients.isLoding
  );
  const IsError: boolean = useSelector(
    (store: RootState) => store.igridients.errorRequest
  );

  if (IsError) {
    return <ErrorComponent />;
  }
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
    </>
  );
};
