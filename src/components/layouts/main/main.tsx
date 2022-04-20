import { FC, useCallback } from 'react';
import styles from './main.module.css';
import { AppHeader } from 'components/app-header';

export const Main: FC = ({ children }) => {
  
    const Header = useCallback(() => <AppHeader />, []);
  
  return (
    <main className={styles.main}>
      <Header />
      {children}
    </main>
  );
};
