import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';

const BASE_URL = import.meta.env.PUBLIC_URL;

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { basename: BASE_URL },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
