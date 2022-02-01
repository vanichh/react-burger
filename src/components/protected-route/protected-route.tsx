import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';

export const ProtectedRoute = ({ children, ...rest }: any) => {
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
