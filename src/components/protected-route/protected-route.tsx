import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';

export const ProtectedRoute = ({ children, ...rest }: any) => {
  const { isAuth } = useSelector((store: RootState) => store.user);
  console.log(isAuth);
  if (isAuth === null) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to='/login' />)}
    />
  );
};
