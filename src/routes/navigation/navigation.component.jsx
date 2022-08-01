import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { NavContainer } from './navigation.styles';

const Navigation = () => {
    return (
      <Fragment>
          <NavContainer>
            <h2>Este es el titulo de la pagina</h2>
          </NavContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;