import styles from './page.module.css';
import { FC } from 'React';
import { useSelector } from 'services/types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ErrorRequest as ErrorComponent } from 'components/app/error-request';
import { BurgerIngredients } from 'components/burger-ingredients';
import { BurgerConstructor } from 'components/burger-constructor';

export const HomePage: FC = () => {
  
  const { isLoding, errorRequest } = useSelector(store => store.igridients);

  if (errorRequest) {
    return <ErrorComponent />;
  }
  return (
    <>
      {isLoding && (
        <div className={styles.container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      )}
    </>
  );
};
