import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AddProducts from "./Pages/AddProducts/AddProducts.jsx";
import MyCart from "./Pages/MyCart/MyCart.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/LogIn/LogIn.jsx";
import BrandProducts from "./Pages/BrandProducts/BrandProducts.jsx";
import ProductDetails from "./Pages/productDetails/ProductDetails.jsx";
import Update from "./Pages/Update/Update.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
        loader: () =>
          fetch("https://fashion-and-apparel-server-wine.vercel.app/mycart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "/brandproducts/:name",
        element: <BrandProducts></BrandProducts>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
        loader: ({ params }) =>
          fetch(
            `https://fashion-and-apparel-server-wine.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
        loader: ({ params }) =>
          fetch(
            `https://fashion-and-apparel-server-wine.vercel.app/productdetails/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
