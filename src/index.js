import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Components/Adminpanel/Admin";
import Genral_Element from "./Components/Adminpanel/Genral_Element";
import Sidemenu from "./Components/Adminpanel/Sidemenu";
import Footer from "./Components/Adminpanel/Footer";
import Headers from "./Components/Adminpanel/Headers";
import Dashboard from "./Components/Adminpanel/Dashboard";
import Datatable from "./Components/Adminpanel/Datatable";
import Add_Product from "./Components/Adminpanel/Add_Product";
import View_Product from "./Components/Adminpanel/View_Product";
import Category from "./Components/Adminpanel/Category";
import Sub_category from "./Components/Adminpanel/subCategory";
import Update_Product from "./Components/Adminpanel/Update_Product";
import Add_brand from "./Components/Adminpanel/Add_brand";
import Add_To_cart from "./Add_To_Cart";
import { Provider } from "react-redux";
import Store from "./Redux/Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminpanel" element={<Admin />} />
        <Route path="/ge" element={<Genral_Element />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Sidemenu" element={<Sidemenu />} />
        <Route path="/Header" element={<Headers />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Datatable" element={<Datatable />} />
        <Route path="/Addproduct" element={<Add_Product />} />
        <Route path="/Viewproduct" element={<View_Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<Sub_category />} />
        <Route path="/updateProduct" element={<Update_Product />} />
        <Route path="/Addbrand" element={<Add_brand />} />
        <Route path="/AddToCart" element={<Add_To_cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
