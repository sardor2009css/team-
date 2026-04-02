import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Home from './pages/Home.jsx' 
import Header from './pages/Header.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />, 
    children: [
      {
        path: "/",
        element: <Home />, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)