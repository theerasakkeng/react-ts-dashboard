import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Container from "@mui/material/Container";
import SideBar from "./components/sidebar/SideBar";
import NavbarTop from "./components/navbar/NavbarTop";

import Dashboard from "./page/dashboard/Dashboard";
import Customer from "./page/customer/Customer";
import Home from "./page/home/Home";
import Products from "./page/products/Products";
import Leaflet from "./page/map/leaflet/Leaflet";
import Maplibre from "./page/map/maplibre/Maplibre";
import GoogleMap from "./page/map/googlemap/GoogleMap";
import Error from "./page/error/Error";
import Login from "./page/login/Login";

import { LoadingProvider } from "./Provider/LoaderProvider";

import getData from "./api/api";
import axios from "axios";
import { padding } from "@mui/system";

function App() {
  const [logined, setLoggedIn] = useState<Boolean>(false);
  const navigate = useNavigate();
  return (
    <LoadingProvider>
      <div className="App">
        {!logined && (
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        )}
        {logined && (
          <div className="layout-wrap">
            <SideBar />
            <div className="content-wrap">
              <NavbarTop />
              <div className="content-main">
                <Container
                  maxWidth="xl"
                  sx={{
                    height: "100%",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                  }}
                >
                  <div className="content-route bg-blur">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route
                        path="customers/customers-list"
                        element={<Customer />}
                      />
                      <Route path="map/leaflet" element={<Leaflet />} />
                      <Route path="map/map-libre" element={<Maplibre />} />
                      <Route path="map/google-map" element={<GoogleMap />} />
                      <Route path="store/products" element={<Products />} />
                      <Route path="*" element={<Error />} />
                    </Routes>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        )}
      </div>
    </LoadingProvider>
  );
}

export default App;
