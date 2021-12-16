import { createContext } from 'react';
import DataProps from '../../utils/types';

export const BurgerContext = createContext<DataProps[]>([]);
