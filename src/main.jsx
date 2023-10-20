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
import BrandProducts from './Pages/BrandProducts/BrandProducts.jsx'
import ProductDetails from './Pages/productDetails/ProductDetails.jsx'
import Update from './Pages/Update/Update.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('/brand.json')
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
      },
      {
        path: '/brandproducts/:name',
        element:<BrandProducts></BrandProducts>,
        loader:()=>fetch('/brand.json')
      },
      {
        path:'/productdetails/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`http://localhost:5000/productdetails/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/productdetails/${params.id}`)
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
