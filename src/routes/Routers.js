import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductsDetails from "../pages/ProductsDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import ProdectRoute from "./ProdectRoute";
import AddProducts from "../components/admin/AddProducts";
import AllProducts from "../components/admin/AllProducts";
import Dashboard from "../components/admin/Dashboard";
import Users from "../components/admin/Users";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />

      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductsDetails />} />
      <Route path="cart" element={<Cart />} />
      
      <Route path="/*" element={<ProdectRoute />}>

        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard-all-products" element={<AllProducts />} />
        <Route path="dashboard-add-products" element={<AddProducts />} />
        <Route path="dashboard/users" element={<Users />} />

      </Route>
      {/* <Route
        path="checkout"
        element={
          <ProdectRoute>
            <Checkout />
          </ProdectRoute>
        }
      /> */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
