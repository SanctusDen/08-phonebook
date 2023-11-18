import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import { refreshrThunk } from 'redux/authReducer';

const Navigation = lazy(() => import('components/Navigation/Navigation'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <Navigation /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ContactsPage /> },
];

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshrThunk);
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Outlet />
    </Suspense>
  );
};
