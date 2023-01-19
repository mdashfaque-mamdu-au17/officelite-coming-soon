import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SignUpFallBack from './pages/SignUpFallBack';
const SignUp = lazy(() => import('./pages/SignUp'));

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<SignUpFallBack />}>
        <SignUp />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
