import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';

const BASE_APP_URL = import.meta.env.VITE_BASE_APP_URL;

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { basename: BASE_APP_URL },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
