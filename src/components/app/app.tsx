/* eslint-disable react-hooks/exhaustive-deps */
import styles from './app.module.css';
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { RootState } from 'services/store';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ErrorComponent from './error-request';
import { URL_API } from 'utils/url-api';
const URL_REQUEST_INGREDIENTS = URL_API + 'ingredients';

export default function App() {
  const dispatch = useDispatch();
  const isLoding: boolean = useSelector(
    (store: RootState) => store.igridients.isLoding
  );
  const IsError: boolean = useSelector(
    (store: RootState) => store.igridients.errorRequest
  );
  useEffect(() => {
    dispatch(getIngredients(URL_REQUEST_INGREDIENTS));
  }, []);

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
      {IsError && <ErrorComponent />}
    </>
  );
}
