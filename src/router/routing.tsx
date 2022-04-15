import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalSwitch } from './modal-switch';

export const Routing: FC = ({ children }) => {
  return (
    <Router basename='/react-burger'>
      {children}
      <ModalSwitch />
    </Router>
  );
};
