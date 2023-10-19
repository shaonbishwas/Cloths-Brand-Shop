import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './authProvider/AuthProvider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AddProducts from './Pages/AddProducts/AddProducts.jsx'
import MyCart from './Pages/MyCart/MyCart.jsx'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/LogIn/LogIn.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/addproducts',
        element:<AddProducts></AddProducts>
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
