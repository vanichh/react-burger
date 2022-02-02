import { FC, ReactNode } from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';

interface IPropsProtectedRoute extends RouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<IPropsProtectedRoute> = (props) => {
  const { children, ...rest } = props;

  const { isAuth } = useSelector((store: RootState) => store.user);

  if (isAuth === null) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
