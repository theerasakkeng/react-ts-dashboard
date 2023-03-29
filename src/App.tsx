import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import Dashboard from "./page/dashboard/Dashboard";
import Customer from "./page/customer/Customer";
import Home from "./page/home/Home";
import Products from "./page/products/Products";
import Leaflet from "./page/map/leaflet/Leaflet";
import Maplibre from "./page/map/maplibre/Maplibre";
import GoogleMap from "./page/map/googlemap/GoogleMap";
import Error from "./page/error/Error";
import Login from "./page/login/Login";
import Layout from "./page/Layout";
import Register from "./page/register/Register";

import { LoadingProvider } from "./Provider/LoaderProvider";

function App() {
  const [logined, setLoggedIn] = useState<Boolean>(true);
  const navigate = useNavigate();

  return (
    <LoadingProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers/customers-list" element={<Customer />} />
            <Route path="map/leaflet" element={<Leaflet />} />
            <Route path="map/map-libre" element={<Maplibre />} />
            <Route path="map/google-map" element={<GoogleMap />} />
            <Route path="store/products" element={<Products />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </LoadingProvider>
  );
}

export default App;
