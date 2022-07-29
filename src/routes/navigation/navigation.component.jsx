import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';


const Navigation = () => {
    return (
      <Fragment>
        <div>
          <h2>I am the navigation bar</h2>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;