import { Loader } from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import Home from 'pages/Home';

import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
import { Header } from './Navigation.styled';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

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
          <Home />
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Navigation;
