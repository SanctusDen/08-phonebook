import React, { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
// import Navigation from './Navigation/Navigation';

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
