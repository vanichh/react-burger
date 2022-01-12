/* eslint-disable react-hooks/exhaustive-deps */
import styles from 'components/app/app.module.css';
import { useEffect } from 'react';
import { RootState } from 'services/store';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ErrorComponent from 'components/app/error-request';
import { URL_API } from 'utils/url-api';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';
import { getIngredients } from 'services/actions/ingredients';
const URL_REQUEST_INGREDIENTS = URL_API + 'ingredients';


export const HomePage = () => {
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
    )
}