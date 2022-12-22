import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Container from "@mui/material/Container";
import SideBar from "./components/sidebar/SideBar";
import NavbarTop from "./components/navbar/NavbarTop";

import Dashboard from "./page/dashboard/Dashboard";
import Customer from "./page/customer/Customer";
import Home from "./page/home/Home";

import { LoadingProvider } from "./Provider/LoaderProvider";

import getData from "./api/api";
import axios from "axios";
import { padding } from "@mui/system";

function App() {
  return (
    <LoadingProvider>
      <div className="App">
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
                <div className="bg-blur">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="customer" element={<Customer />} />
                  </Routes>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </LoadingProvider>
  );
}

export default App;
