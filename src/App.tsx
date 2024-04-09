import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home.tsx';
import Search from './pages/Home.tsx';
import Root from './pages/Root.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'search', element: <Search /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
