import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//pages
import EntryTime from "./routes/EntryTime.tsx";
import Login from './routes/Login.tsx';
import ExitTime from './routes/ExitTime.tsx';
import Home from './routes/Home.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/home/:id",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/home/:id",
            element: <Home />
          }

        ]
      },
      {

        path: "/entry_time/:id",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/entry_time/:id",
            element: <EntryTime />
          }
        ]

      },
      {
        path: "/exit_time/:id",
        element: <ProtectedRoute />,
        children: [{
          path: "/exit_time/:id",
          element: <ExitTime />
        }]

      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
