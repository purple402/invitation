import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SharePage from './pages/SharePage';

const BASE_URL = import.meta.env.PUBLIC_URL;

const router = createBrowserRouter([
  {
    path: '/invitation',
    element: <MainPage />,
  },
  {
    path: '/invitation/share',
    element: <SharePage />,
  },
  { basename: BASE_URL },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
