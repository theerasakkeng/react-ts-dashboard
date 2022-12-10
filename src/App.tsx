import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Container from "@mui/material/Container";
import SideBar from "./components/sidebar/SideBar";
import NavbarTop from "./components/navbar/NavbarTop";
import Dashboard from "./page/Dashboard/Dashboard";

import getData from "./api/api";
import axios from "axios";
import { padding } from "@mui/system";

function App() {
  const [data, setData] = useState<any>([""]);
  useEffect(() => {
    axios
      .get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  const covidData = data.map((obj: any, index: number) => {
    console.log(obj.new_case);
    const { new_case, total_case } = obj;
    return <div key={index}>{new_case}</div>;
  });
  return (
    <div className="App">
      <div className="layout-wrap">
        <SideBar />
        <div className="content-wrap">
          <NavbarTop />
          <div className="content-main">
            <Container
              maxWidth="xl"
              sx={{ height: "100%", paddingTop: "24px", paddingBottom: "24px" }}
            >
              <div className="bg-blur">
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                </Routes>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
