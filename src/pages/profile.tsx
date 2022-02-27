import { FC } from 'react';
import { ProfileEditing } from 'components/profile-editing';
import { ProfileOrders } from 'components/profile-orders';
import { Route, Switch } from 'react-router-dom';
import { Wrapper } from 'components/wrapper';
import { MenuProfile } from 'components/menu-profile';

const style = { alignItems: 'start' };

export const ProfilePage: FC = () => {
  return (
    <Wrapper style={style}>
      <MenuProfile />
      <Switch>
        <Route path='/profile' exact component={ProfileEditing} />
        <Route path='/profile/orders' exact component={ProfileOrders} />
      </Switch>
    </Wrapper>
  );
};
