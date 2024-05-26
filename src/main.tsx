import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//pages
import EntryTime from "./routes/EntryTime.tsx";
import Login from './routes/Login.tsx';
import ExitTime from './routes/ExitTime.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/entry_time",
        element:<EntryTime/>
      },
      {
        path:"/exit_time",
        element:<ExitTime/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
