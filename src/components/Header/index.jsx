import React from "react";
import { UserContext } from "../../contexts";

const Header = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        <header style={{border: '2px solid'}}>
          <h1>My site</h1>
          <img src={user.imgSrc} alt={user.login} />
        </header>;
      }}
    </UserContext.Consumer>
  );
};

export default Header;
