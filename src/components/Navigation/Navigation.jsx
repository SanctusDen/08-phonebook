import { Loader } from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';

import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

import { Header } from './Navigation.styled';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  // const dispatch = useDispatch();

  return (
    <>
      <Header>
        <NavLink to="/">
          <span>LOGO</span>
        </NavLink>
        <nav>
          {authenticated ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Navigation;
