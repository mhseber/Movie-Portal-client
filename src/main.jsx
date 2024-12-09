import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AllMovies from './Pages/AllMovies.jsx';
import Community from './Pages/Community.jsx';
import Login from './Pages/Login.jsx';
import AuthLayouts from './Layouts/AuthLayouts.jsx';
import Register from './Pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/allMovie",
        element: <AllMovies></AllMovies>
      },
      {
        path: "/community",
        element: <Community></Community>
      },
      {
        path: "auth",
        element: <AuthLayouts></AuthLayouts>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
          {
            path: "*",
            element: <h1>Error</h1>
          },

        ],
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
