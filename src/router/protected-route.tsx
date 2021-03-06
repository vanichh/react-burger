import { FC } from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'services/types/';

export const ProtectedRoute: FC<RouteProps> = (props) => {
  const { children, ...rest } = props;

  const { isAuth } = useSelector((store) => store.user);

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
