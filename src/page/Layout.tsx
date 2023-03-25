import { useState, useEffect, useMemo, FC } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import SideBar from "../components/sidebar/SideBar";
import NavbarTop from "../components/navbar/NavbarTop";

const Layout: FC = () => {
  return (
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
              <Outlet />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Layout;
