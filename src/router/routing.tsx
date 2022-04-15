import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalSwitch } from './modal-switch';

export const Routing: FC<{ basename?: string }> = ({ children, basename }) => {
  return (
    <Router basename={basename || ''}>
      {children}
      <ModalSwitch />
    </Router>
  );
};
