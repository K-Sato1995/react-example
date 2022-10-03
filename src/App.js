import React from 'react';
import './App.css';
import Counter from './Counter';
import Home from './Home';
import TodoList from './TodoList';
import DataFetch from './DataFetch';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },    {
      path: 'counter',
      element: <Counter />,
    },
    {
      path: 'todolist',
      element: <TodoList />,
    },
    {
      path: 'datafetch',
      element: <DataFetch />,
    }
  ]);

  return (
    <React.StrictMode>

      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
