import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <Header>
        <NavLink to="/">
          <span>LOGO</span>
        </NavLink>
        <nav>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
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
