import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import Root from './pages/Root.tsx';
import Meal from './pages/Meal.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'search', element: <Search /> },
      { path: 'meal/:mealId', element: <Meal /> },

    ],
  },
]);


function App() {
  return <RouterProvider router={Router} />;
}

export default App;
