/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'services/types';
import { FC, useEffect, useCallback } from 'react';
import { getUser } from 'services/actions/user';
import { getIngredients } from 'services/actions/ingredients';
import { AppHeader } from '../app-header';
import { Routing } from 'router';

export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // запрашиваем пользователя и ингриденты
    dispatch(getIngredients());
    dispatch(getUser());
  }, []);

  const Header = useCallback(() => <AppHeader />, []);

  return (
    <Routing basename='/react-burger'>
      <Header />
    </Routing>
  );
};
