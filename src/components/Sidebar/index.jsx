import React from 'react';
import { UserContext } from '../../contexts';

const Sidebar = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        <aside>
            <p>Login: {user.login}</p>
            <p>Email: {user.email}</p>
        </aside>

      }}
    </UserContext.Consumer>
    
  );
}

export default Sidebar;
