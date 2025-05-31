import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';

const BASE_APP_URL = import.meta.env.VITE_BASE_APP_URL;

const router = createBrowserRouter([
  {
    path: '/0802',
    element: <MainPage />,
  },
]);

const App = () => {
  return <RouterProvider basename={BASE_APP_URL} router={router} />;
};

export default App;
