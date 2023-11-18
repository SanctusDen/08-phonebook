import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import { refreshrThunk } from 'redux/authreducer';
import Navigation from './Navigation/Navigation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestictedRoute from './RestictedRoute/RestictedRoute';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const Home = lazy(() => import('pages/Home'));

const appRoutes = [
  { path: '/', element: <Home /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshrThunk);
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Outlet />
      </Suspense>
    </>
  );
};
