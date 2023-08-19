import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import cartProductLoader from './ProdictDe/ProductDe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
    
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
     
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductLoader
      },
    
      {
        path:'login',
        element: <Login></Login>
      }
    
      ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,
)
